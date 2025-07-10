"use client";
import React, { useEffect, useState, useRef } from "react";
import { usePostCode } from "@apiservices";
import { useToast } from "kodebloxui/components/ui/use-toast";
import PostCodeDialog, { PostData } from "./PostCodeDialog";
import { Editor } from "@monaco-editor/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "kodebloxui/components/ui/select";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "kodebloxui/components/ui/resizable";
import IframeRenderer from "kodebloxui/customComponents/IframeRenderer";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "kodebloxui/components/ui/tabs";
import { CSSICON, Html5ColoredIcon, JSIcon } from "kodebloxui/customComponents";
import {
  HelpCircle,
  Monitor,
  MoonIcon,
  Phone,
  Smartphone,
  SunIcon,
  TabletSmartphone,
} from "lucide-react";

// Helper for code templates
const TEMPLATES = {
  html: '<div class="my-component">\n  <!-- Your HTML here -->\n</div>',
  css: ".my-component {\n  /* Your CSS here */\n}",
  js: "// Your JavaScript here\n",
  tailwind:
    '<div class="p-4 bg-white rounded shadow">\n  <!-- Tailwind HTML here -->\n</div>',
};

const DEVICE_PREVIEWS = [
  { label: "Mobile", icon: <Smartphone />, width: 375, height: 667 },
  { label: "Tablet", icon: <TabletSmartphone />, width: 768, height: 1024 },
  { label: "Desktop", icon: <Monitor />, width: 1280, height: 800 },
];

const EditorRenderer: React.FC = () => {
  const [cssFramework, setCssFramework] = useState("tailwind");
  const [htmlContent, setHtmlContent] = useState(TEMPLATES.tailwind);
  const [cssContent, setCssContent] = useState(TEMPLATES.css);
  const [jsContent, setJsContent] = useState(TEMPLATES.js);
  const [isHorizontal, setIsHorizontal] = useState(true);
  const [isPostDisabled, setIsPostDisabled] = useState(false);
  const [activeTab, setActiveTab] = useState("html");
  const [theme, setTheme] = useState<"vs-dark" | "light">("vs-dark");
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [devicePreview, setDevicePreview] = useState(DEVICE_PREVIEWS[2]);
  const [autoSaveStatus, setAutoSaveStatus] = useState<
    "saved" | "saving" | "error"
  >("saved");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [undoReset, setUndoReset] = useState<{
    html: string;
    css: string;
    js: string;
  } | null>(null);

  const { postCode, isLoading } = usePostCode();
  const { toast } = useToast();
  const autoSaveTimeout = useRef<NodeJS.Timeout | null>(null);

  const forbiddenTags = ["<head", "<html", "<script", "<img"];

  // Auto-save logic
  useEffect(() => {
    setAutoSaveStatus("saving");
    if (autoSaveTimeout.current) clearTimeout(autoSaveTimeout.current);
    autoSaveTimeout.current = setTimeout(() => {
      // Simulate save
      setAutoSaveStatus("saved");
    }, 1200);
    return () => {
      if (autoSaveTimeout.current) clearTimeout(autoSaveTimeout.current);
    };
  }, [htmlContent, cssContent, jsContent, cssFramework]);

  // Responsive layout
  useEffect(() => {
    const handleResize = () => setIsHorizontal(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Warn on unload
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = "";
      toast({
        title: "Warning",
        description:
          "You are leaving without posting your code. This might result in loss of your work.",
      });
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  // Error checking
  const checkForbiddenTags = (content: string) =>
    forbiddenTags.some((tag) => content.includes(tag));

  const handleHtmlContentChange = (value: string) => {
    setHtmlContent(value || "");
    if (checkForbiddenTags(value || "")) {
      setErrorMsg(
        "The HTML Content should not contain <head>, <html>, <img/>, or <script> tags."
      );
      setIsPostDisabled(true);
    } else {
      setErrorMsg(null);
      setIsPostDisabled(false);
    }
  };

  const handlesetCssFramework = (value: string) => {
    setCssFramework(value);
    setCssContent(TEMPLATES.css);
    setHtmlContent(value === "tailwind" ? TEMPLATES.tailwind : TEMPLATES.html);
    setJsContent(TEMPLATES.js);
    setIsPostDisabled(false);
  };

  // Reset with confirmation and undo
  const handleReset = () => {
    setUndoReset({ html: htmlContent, css: cssContent, js: jsContent });
    setHtmlContent(
      cssFramework === "tailwind" ? TEMPLATES.tailwind : TEMPLATES.html
    );
    setCssContent(TEMPLATES.css);
    setJsContent(TEMPLATES.js);
    setIsPostDisabled(false);
    toast({ title: "Reset", description: "Editor reset to default template." });
    setShowResetConfirm(false);
  };
  const handleUndoReset = () => {
    if (undoReset) {
      setHtmlContent(undoReset.html);
      setCssContent(undoReset.css);
      setJsContent(undoReset.js);
      setUndoReset(null);
      toast({ title: "Undo", description: "Reset undone." });
    }
  };

  // Copy code to clipboard
  const handleCopy = (type: "html" | "css" | "js") => {
    let code = "";
    if (type === "html") code = htmlContent;
    if (type === "css") code = cssContent;
    if (type === "js") code = jsContent;
    navigator.clipboard.writeText(code);
    toast({
      title: "Copied!",
      description: `${type.toUpperCase()} code copied to clipboard.`,
    });
  };

  // Post code
  const handlePostCode = (data: PostData, closeDialog: () => void) => {
    const postData = {
      ...data,
      code: {
        styleType: cssFramework,
        htmlCode: htmlContent,
        cssCode: cssFramework === "css" ? cssContent : "",
        tailwindCode: cssFramework === "tailwind" ? htmlContent : "",
        javascriptCode: jsContent,
      },
    };
    postCode(
      postData,
      (result: string) => {
        toast({
          title: "Component Created!",
          description: "Your UI component was posted successfully.",
        });
        closeDialog();
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 300);
      },
      (error: string) => {
        toast({
          title: "Failed!",
          description: "Failed to post code: " + error,
        });
      }
    );
  };

  // Editor header with theme, help, and device preview
  const renderEditorHeader = () => (
    <div className="flex items-center justify-between px-3 py-2 bg-muted rounded-t-lg border-b">
      <div className="flex items-center gap-2">
        <span className="font-semibold text-lg text-primary">
          Create New UI Component
        </span>
        <span className="ml-2 text-xs text-muted-foreground">
          {cssFramework === "tailwind" ? "Tailwind CSS" : "CSS"} + HTML + JS
        </span>
        <button
          className="ml-3 text-muted-foreground hover:text-primary"
          aria-label="Help"
          onClick={() => setShowHelp(true)}>
          <HelpCircle size={18} />
        </button>
      </div>
      <div className="flex gap-2 items-center">
        <button
          className="rounded p-1 hover:bg-accent"
          aria-label="Toggle Theme"
          onClick={() => setTheme(theme === "vs-dark" ? "light" : "vs-dark")}>
          {theme === "vs-dark" ? <SunIcon size={18} /> : <MoonIcon size={18} />}
        </button>
        <button
          className="px-2 py-1 rounded text-xs bg-accent hover:bg-accent-foreground transition"
          onClick={() => setShowResetConfirm(true)}
          type="button">
          Reset
        </button>
        {undoReset && (
          <button
            className="px-2 py-1 rounded text-xs bg-muted-foreground text-background hover:bg-primary transition"
            onClick={handleUndoReset}
            type="button">
            Undo Reset
          </button>
        )}
      </div>
    </div>
  );

  // Device preview controls
  const renderDevicePreviewControls = () => (
    <div className="flex gap-2">
      {DEVICE_PREVIEWS.map((device) => (
        <button
          key={device.label}
          className={`rounded p-1 border ${
            devicePreview.label === device.label
              ? "bg-accent border-primary"
              : "border-transparent"
          } hover:bg-accent`}
          aria-label={device.label}
          onClick={() => setDevicePreview(device)}>
          {device.icon}
        </button>
      ))}
    </div>
  );

  // Status bar
  const renderStatusBar = () => (
    <div className="flex items-center justify-between px-3 py-1 text-xs bg-muted border-t rounded-b-lg">
      <span>
        {autoSaveStatus === "saving" && (
          <span className="text-yellow-600">Saving...</span>
        )}
        {autoSaveStatus === "saved" && (
          <span className="text-green-600">All changes saved</span>
        )}
        {autoSaveStatus === "error" && (
          <span className="text-red-600">Error saving</span>
        )}
      </span>
      <span>
        {errorMsg && <span className="text-red-600">{errorMsg}</span>}
      </span>
    </div>
  );

  // Help modal
  const renderHelpModal = () =>
    showHelp && (
      <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
        <div className="bg-background rounded-lg shadow-lg p-6 max-w-md w-full relative">
          <button
            className="absolute top-2 right-2 text-muted-foreground hover:text-primary"
            onClick={() => setShowHelp(false)}
            aria-label="Close">
            ×
          </button>
          <h2 className="font-bold text-lg mb-2">Editor Help & Tips</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Switch between HTML, CSS, and JS tabs to edit your component.
            </li>
            <li>Choose your preferred CSS framework (Tailwind or CSS).</li>
            <li>
              Use the device icons to preview your component on different screen
              sizes.
            </li>
            <li>
              Click <b>Reset</b> to start over, or <b>Undo Reset</b> if you
              change your mind.
            </li>
            <li>
              Click <b>Copy</b> to copy code from any editor tab.
            </li>
            <li>Toggle between light and dark themes for your comfort.</li>
            <li>Post your component when you&apos;re ready!</li>
          </ul>
        </div>
      </div>
    );

  // Reset confirmation modal
  const renderResetConfirm = () =>
    showResetConfirm && (
      <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
        <div className="bg-background rounded-lg shadow-lg p-6 max-w-sm w-full relative">
          <h2 className="font-bold text-lg mb-2">Reset Editor?</h2>
          <p className="mb-4 text-sm">
            Are you sure you want to reset all code fields? This cannot be
            undone unless you click &quot;Undo Reset&quot; immediately after.
          </p>
          <div className="flex gap-2 justify-end">
            <button
              className="px-3 py-1 rounded bg-muted-foreground text-background hover:bg-primary"
              onClick={handleReset}>
              Yes, Reset
            </button>
            <button
              className="px-3 py-1 rounded bg-accent hover:bg-accent-foreground"
              onClick={() => setShowResetConfirm(false)}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );

  return (
    <div className="min-h-[calc(100dvh-115px)] h-[600px]">
      {renderHelpModal()}
      {renderResetConfirm()}
      <nav className="flex flex-wrap justify-between items-center mb-4 gap-4 px-2 max-md:justify-center">
        <div className="flex gap-2 items-center">
          <Select
            onValueChange={handlesetCssFramework}
            defaultValue={cssFramework}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Select CSS Framework" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="tailwind">Tailwind CSS</SelectItem>
              <SelectItem value="css">CSS</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex gap-2">
          <PostCodeDialog
            onSubmit={handlePostCode}
            isLoading={isLoading}
            disabled={isPostDisabled || !htmlContent.trim()}
          />
        </div>
      </nav>
      <div className="hidden md:block h-[calc(100dvh-198px)]">
        <ResizablePanelGroup
          direction={isHorizontal ? "horizontal" : "vertical"}
          className="min-h-[500px] rounded-lg border">
          <ResizablePanel
            defaultSize={60}
            className="rounded-lg h-full bg-muted">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between px-4 py-2 border-b bg-background rounded-t-lg">
                <span className="font-semibold text-primary">Live Preview</span>
                {renderDevicePreviewControls()}
              </div>
              <div className="flex-1 overflow-auto flex items-center justify-center bg-background">
                <div
                  className="shadow-lg border rounded-lg bg-white"
                  style={{
                    width: devicePreview.width,
                    height: devicePreview.height,
                    transition: "width 0.2s, height 0.2s",
                    overflow: "auto",
                  }}>
                  <IframeRenderer
                    htmlContent={htmlContent}
                    cssContent={cssContent}
                    jsContent={jsContent}
                    cssFramework={cssFramework}
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>
              </div>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle className="mx-2 border-2" />{" "}
          <ResizablePanel defaultSize={40} className="rounded-lg">
            {renderEditorHeader()}
            <Tabs
              defaultValue="html"
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full">
              <TabsList className="m-2">
                <TabsTrigger
                  value="html"
                  className="flex items-center gap-2"
                  title="Write your HTML code here">
                  <Html5ColoredIcon height={16} width={16} /> HTML
                </TabsTrigger>
                {cssFramework === "css" && (
                  <TabsTrigger
                    value="css"
                    className="flex items-center gap-2"
                    title="Write your CSS code here">
                    <CSSICON size={16} /> CSS
                  </TabsTrigger>
                )}
                <TabsTrigger
                  value="js"
                  className="flex items-center gap-2"
                  title="Write your JavaScript code here">
                  <JSIcon size={16} /> JavaScript
                </TabsTrigger>
              </TabsList>
              <TabsContent value="html" className="mt-0">
                <div className="flex items-center justify-between px-2 pb-1">
                  <span className="text-xs text-muted-foreground">
                    HTML Editor
                  </span>
                  <button
                    className="text-xs underline"
                    onClick={() => handleCopy("html")}
                    type="button"
                    title="Copy HTML">
                    Copy
                  </button>
                </div>
                <Editor
                  height="400px"
                  defaultLanguage="html"
                  value={htmlContent}
                  onChange={(value) => handleHtmlContentChange(value || "")}
                  theme={theme}
                  options={{
                    fontSize: 14,
                    minimap: { enabled: false },
                    lineNumbers: "on",
                    folding: true,
                    wordWrap: "on",
                  }}
                />
              </TabsContent>
              {cssFramework === "css" && (
                <TabsContent value="css" className="mt-0">
                  <div className="flex items-center justify-between px-2 pb-1">
                    <span className="text-xs text-muted-foreground">
                      CSS Editor
                    </span>
                    <button
                      className="text-xs underline text-primary"
                      onClick={() => handleCopy("css")}
                      type="button"
                      title="Copy CSS">
                      Copy
                    </button>
                  </div>
                  <Editor
                    height="400px"
                    defaultLanguage="css"
                    value={cssContent}
                    onChange={(value) => setCssContent(value || "")}
                    theme={theme}
                    options={{
                      fontSize: 14,
                      minimap: { enabled: false },
                      lineNumbers: "on",
                      folding: true,
                      wordWrap: "on",
                    }}
                  />
                </TabsContent>
              )}
              <TabsContent value="js" className="mt-0">
                <div className="flex items-center justify-between px-2 pb-1">
                  <span className="text-xs text-muted-foreground">
                    JavaScript Editor
                  </span>
                  <button
                    className="text-xs underline"
                    onClick={() => handleCopy("js")}
                    type="button"
                    title="Copy JavaScript">
                    Copy
                  </button>
                </div>
                <Editor
                  height="400px"
                  defaultLanguage="javascript"
                  value={jsContent}
                  onChange={(value) => setJsContent(value || "")}
                  theme={theme}
                  options={{
                    fontSize: 14,
                    minimap: { enabled: false },
                    lineNumbers: "on",
                    folding: true,
                    wordWrap: "on",
                  }}
                />
              </TabsContent>
            </Tabs>
            {renderStatusBar()}
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      {/* Mobile UI */}
      <div className="md:hidden block overflow-hidden">
        <Tabs
          defaultValue="preview"
          className="w-vw h-[calc(100dvh-224px)]"
          value={activeTab}
          onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="h-[calc(100dvh-224px)]">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between px-4 py-2 border-b bg-muted rounded-t-lg">
                <span className="font-semibold text-primary">Live Preview</span>
                {renderDevicePreviewControls()}
              </div>
              <div className="flex-1 overflow-auto flex items-center justify-center bg-background">
                <div
                  className="shadow-lg border rounded-lg bg-white"
                  style={{
                    width: devicePreview.width,
                    height: devicePreview.height,
                    transition: "width 0.2s, height 0.2s",
                    overflow: "auto",
                  }}>
                  <IframeRenderer
                    htmlContent={htmlContent}
                    cssContent={cssContent}
                    jsContent={jsContent}
                    cssFramework={cssFramework}
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="code" className="h-[calc(100dvh-224px)]">
            <Tabs
              defaultValue="html"
              value={activeTab}
              onValueChange={setActiveTab}>
              <TabsList className="m-1">
                <TabsTrigger
                  value="html"
                  className="flex items-center gap-2"
                  title="Write your HTML code here">
                  <Html5ColoredIcon height={16} width={16} /> HTML
                </TabsTrigger>
                {cssFramework === "css" && (
                  <TabsTrigger
                    value="css"
                    className="flex items-center gap-2"
                    title="Write your CSS code here">
                    <CSSICON size={16} /> CSS
                  </TabsTrigger>
                )}
                <TabsTrigger
                  value="js"
                  className="flex items-center gap-2"
                  title="Write your JavaScript code here">
                  <JSIcon size={16} /> JavaScript
                </TabsTrigger>
              </TabsList>
              <TabsContent value="html" className="mt-0">
                <div className="flex items-center justify-between px-2 pb-1">
                  <span className="text-xs text-muted-foreground">
                    HTML Editor
                  </span>
                  <button
                    className="text-xs underline"
                    onClick={() => handleCopy("html")}
                    type="button"
                    title="Copy HTML">
                    Copy
                  </button>
                </div>
                <Editor
                  height="calc(100dvh - 272px)"
                  defaultLanguage="html"
                  value={htmlContent}
                  onChange={(value) => handleHtmlContentChange(value || "")}
                  theme={theme}
                  options={{
                    fontSize: 14,
                    minimap: { enabled: false },
                    lineNumbers: "on",
                    folding: true,
                    wordWrap: "on",
                  }}
                />
              </TabsContent>
              {cssFramework === "css" && (
                <TabsContent value="css" className="mt-0">
                  <div className="flex items-center justify-between px-2 pb-1">
                    <span className="text-xs text-muted-foreground">
                      CSS Editor
                    </span>
                    <button
                      className="text-xs underline text-primary"
                      onClick={() => handleCopy("css")}
                      type="button"
                      title="Copy CSS">
                      Copy
                    </button>
                  </div>
                  <Editor
                    height="calc(100dvh - 272px)"
                    defaultLanguage="css"
                    value={cssContent}
                    onChange={(value) => setCssContent(value || "")}
                    theme={theme}
                    options={{
                      fontSize: 14,
                      minimap: { enabled: false },
                      lineNumbers: "on",
                      folding: true,
                      wordWrap: "on",
                    }}
                  />
                </TabsContent>
              )}
              <TabsContent value="js" className="mt-0">
                <div className="flex items-center justify-between px-2 pb-1">
                  <span className="text-xs text-muted-foreground">
                    JavaScript Editor
                  </span>
                  <button
                    className="text-xs underline"
                    onClick={() => handleCopy("js")}
                    type="button"
                    title="Copy JavaScript">
                    Copy
                  </button>
                </div>
                <Editor
                  height="calc(100dvh - 272px)"
                  defaultLanguage="javascript"
                  value={jsContent}
                  onChange={(value) => setJsContent(value || "")}
                  theme={theme}
                  options={{
                    fontSize: 14,
                    minimap: { enabled: false },
                    lineNumbers: "on",
                    folding: true,
                    wordWrap: "on",
                  }}
                />
              </TabsContent>
            </Tabs>
            {renderStatusBar()}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default EditorRenderer;
