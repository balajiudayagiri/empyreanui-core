"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "empyreanui/components/ui/sheet";
import { Button } from "empyreanui/components/ui/button";
import { Menu } from "lucide-react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export interface ComponentDoc {
  title: string;
  path: string;
  description: string;
  props: {
    name: string;
    type: string;
    description: string;
    required: boolean;
    defaultValue?: any;
  }[];
  example: React.ReactNode;
  usage: string;
  defaultProps?: Record<string, any>;
}

interface ComponentRendererProps {
  components: ComponentDoc[];
  initialComponentPath?: string;
}

const ComponentRenderer: React.FC<ComponentRendererProps> = ({
  components,
  initialComponentPath,
}) => {
  const router = useRouter();
  const [selectedComponent, setSelectedComponent] =
    useState<ComponentDoc | null>(null);
  const [componentProps, setComponentProps] = useState<Record<string, any>>({});

  useEffect(() => {
    if (initialComponentPath) {
      const component = components.find(
        (comp) => comp.path === initialComponentPath
      );
      if (component) {
        setSelectedComponent(component);
        setComponentProps(component.defaultProps || {});
      }
    } else if (components.length > 0) {
      setSelectedComponent(components[0]);
      setComponentProps(components[0].defaultProps || {});
    }
  }, [initialComponentPath, components]);

  const handlePropChange = (propName: string, value: any) => {
    setComponentProps((prevProps) => ({
      ...prevProps,
      [propName]: value,
    }));
  };

  const handleComponentSelect = (component: ComponentDoc) => {
    setSelectedComponent(component);
    setComponentProps(component.defaultProps || {});
    router.push(`?component=${component.path}`);
  };

  return (
    <div className="flex h-full">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-1/5 p-6 shadow-lg border-r overflow-y-auto bg-background/80">
        <h2 className="text-2xl font-bold mb-6">Components</h2>
        <ul>
          {components.map((component) => (
            <li key={component.path} className="mb-4">
              <button
                className={clsx(
                  "w-full text-left px-4 py-3 rounded-lg transition duration-200",
                  {
                    "bg-primary text-black":
                      selectedComponent?.path === component.path,
                    "hover:bg-gray-200/40":
                      selectedComponent?.path !== component.path,
                  }
                )}
                onClick={() => handleComponentSelect(component)}>
                {component.title}
              </button>
            </li>
          ))}
        </ul>
      </aside>
      <main className="md:w-4/5 w-full md:p-8 p-2 overflow-y-auto">
        {/* Mobile Sidebar */}
        <div className="lg:hidden mb-3">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <h2 className="text-2xl font-bold mb-6">Components</h2>
              <ul>
                {components.map((component) => (
                  <li key={component.path} className="mb-4">
                    <SheetClose asChild>
                      <button
                        className={clsx(
                          "w-full text-left px-4 py-3 rounded-lg transition duration-200",
                          {
                            "bg-primary text-black":
                              selectedComponent?.path === component.path,
                            "hover:bg-gray-200/40":
                              selectedComponent?.path !== component.path,
                          }
                        )}
                        onClick={() => handleComponentSelect(component)}>
                        {component.title}
                      </button>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
        {selectedComponent ? (
          <div className="p-6 rounded-lg shadow-lg bg-background border">
            <h1 className="text-6xl font-bold mb-4 text-primary border-b-2">
              {selectedComponent.title}
            </h1>
            <p className="mb-6">{selectedComponent.description}</p>
            <h2 className="text-2xl font-semibold mb-3">Example</h2>
            <div className="p-4 border rounded-lg min-h-80">
              {React.cloneElement(
                selectedComponent.example as React.ReactElement,
                componentProps
              )}
            </div>
            <h2 className="text-2xl font-semibold mb-3">Usage</h2>
            <SyntaxHighlighter
              language="jsx"
              style={vscDarkPlus}
              customStyle={{
                padding: 0,
                borderRadius: 6,
              }}>
              {selectedComponent.usage}
            </SyntaxHighlighter>
            <h2 className="text-2xl font-semibold mb-3">Props</h2>
            <div className="overflow-y-auto w-full">
              <table className="w-full mb-6 border shadow-sm ">
                <thead>
                  <tr>
                    <th className="p-3 border-b text-left">Name</th>
                    <th className="p-3 border-b text-left">Type</th>
                    <th className="p-3 border-b text-left">Description</th>
                    <th className="p-3 border-b text-left">Required</th>
                    <th className="p-3 border-b text-left">Default Value</th>
                    <th className="p-3 border-b text-left w-80">Set Value</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedComponent.props.map((prop) => (
                    <tr key={prop.name}>
                      <td className="p-3 border-b">{prop.name}</td>
                      <td className="p-3 border-b">{prop.type}</td>
                      <td className="p-3 border-b">{prop.description}</td>
                      <td className="p-3 border-b">
                        {prop.required ? "Yes" : "No"}
                      </td>
                      <td className="p-3 border-b">
                        {prop.defaultValue?.toString()}
                      </td>
                      <td className="p-3 border-b min-w-56">
                        <input
                          type="text"
                          value={componentProps[prop.name] || ""}
                          onChange={(e) =>
                            handlePropChange(prop.name, e.target.value)
                          }
                          className="w-80 p-2 border rounded"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p>Select a component to view details</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default ComponentRenderer;
