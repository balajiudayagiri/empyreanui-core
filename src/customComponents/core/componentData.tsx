"use client";
import React from "react";
import {
  CodeEditor,
  ErrorBoundary,
  ScrollAnimationWrapper,
} from "@empyreanui/core";

type ComponentProp = {
  name: string;
  type: string;
  description: string;
  required: boolean;
  defaultValue?: any;
  propType?: string;
};

type ComponentDoc = {
  title: string;
  path: string;
  description: string;
  props: ComponentProp[];
  preview: JSX.Element;
  usage: string;
  render?: (props: Record<string, any>) => JSX.Element;
};

const ErrorTrigger = () => {
  const [hasError, setHasError] = React.useState(false);

  if (hasError) {
    throw new Error("An intentional error!");
  }

  return (
    <button onClick={() => setHasError(true)}>Click to trigger error</button>
  );
};

export const components: ComponentDoc[] = [
  {
    title: "Button",
    path: "components/Button",
    description: "This is a button component used for various actions.",
    props: [
      {
        name: "onClick",
        type: "() => void",
        description: "Function to call on click",
        required: true,
        defaultValue: () => alert("Button clicked"),
      },
      {
        name: "disabled",
        type: "boolean",
        description: "Disable the button",
        required: false,
        defaultValue: false,
      },
      {
        name: "style",
        type: "React.CSSProperties",
        description: "Inline styles for the button",
        required: false,
        defaultValue: {
          padding: "10px",
          backgroundColor: "blue",
          color: "white",
        },
      },
    ],
    preview: (
      <div
        style={{
          height: 300,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <button>Example Button</button>
      </div>
    ),
    usage: `
      import React from 'react';
      
      const ExampleButton = ({ onClick, disabled, style }) => (
        <button onClick={onClick} disabled={disabled} style={style}>
          Example Button
        </button>
      );
    `,
    render: (props) => (
      <div
        style={{
          height: 300,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <button {...props}>Example Button</button>
      </div>
    ),
  },
  {
    title: "Input",
    path: "components/Input",
    description: "This is an input component used for user input.",
    props: [
      {
        name: "value",
        type: "string",
        description: "The value of the input",
        required: true,
        defaultValue: "Default value",
      },
      {
        name: "onChange",
        type: "(event: React.ChangeEvent<HTMLInputElement>) => void",
        description: "Function to call on input change",
        required: true,
        defaultValue: (e: { target: { value: any } }) =>
          console.log(e.target.value),
      },
      {
        name: "placeholder",
        type: "string",
        description: "Placeholder text for the input",
        required: false,
        defaultValue: "Enter text here",
      },
      {
        name: "disabled",
        type: "boolean",
        description: "Disable the input",
        required: false,
        defaultValue: false,
      },
    ],
    preview: (
      <div
        style={{
          height: 300,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <input placeholder="Example Input" />
      </div>
    ),
    usage: `
      import React from 'react';
      
      const ExampleInput = ({ value, onChange, placeholder, disabled }) => (
        <input
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
        />
      );
    `,
  },
  {
    title: "CodeEditor",
    path: "components/CodeEditor",
    description:
      "CodeEditor component that provides a code editor interface with support for multiple files, folder structure, and themes.",
    props: [
      {
        name: "data",
        type: "Object|string",
        description:
          "The file data, either as a string for a single file or an object for multiple files.",
        required: true,
      },
      {
        name: "options",
        type: "Object",
        description: "Options for the Monaco Editor.",
        required: true,
      },
      {
        name: "defaultValue",
        type: "string",
        description: "Default value for the editor.",
        required: false,
      },
      {
        name: "defaultLanguage",
        type: "string",
        description: "Default language for the editor.",
        required: false,
      },
      {
        name: "defaultPath",
        type: "string",
        description: "Default path for the editor.",
        required: false,
      },
      {
        name: "path",
        type: "string",
        description: "Current path for the editor.",
        required: false,
      },
      {
        name: "theme",
        type: "string",
        description: "Theme for the editor. Default is 'vs-dark'.",
        required: false,
        defaultValue: "vs-dark",
      },
      {
        name: "line",
        type: "number",
        description: "Line number to focus on.",
        required: false,
      },
      {
        name: "loading",
        type: "string",
        description: "Loading message or component.",
        required: false,
      },
      {
        name: "overrideServices",
        type: "Object",
        description: "Override services for the editor.",
        required: false,
      },
      {
        name: "saveViewState",
        type: "boolean",
        description: "Whether to save the view state of the editor.",
        required: false,
      },
      {
        name: "keepCurrentModel",
        type: "boolean",
        description: "Whether to keep the current model in the editor.",
        required: false,
      },
      {
        name: "width",
        type: "string",
        description: "Width of the editor.",
        required: false,
      },
      {
        name: "height",
        type: "string",
        description: "Height of the editor.",
        required: false,
      },
      {
        name: "className",
        type: "string",
        description: "Additional class name for the editor.",
        required: false,
      },
      {
        name: "wrapperProps",
        type: "Object",
        description: "Additional props for the wrapper element.",
        required: false,
      },
      {
        name: "beforeMount",
        type: "Function",
        description: "Function to execute before the editor mounts.",
        required: false,
      },
      {
        name: "onMount",
        type: "Function",
        description: "Function to execute when the editor mounts.",
        required: false,
      },
      {
        name: "onChange",
        type: "Function",
        description: "Function to execute when the editor content changes.",
        required: false,
      },
      {
        name: "onValidate",
        type: "Function",
        description:
          "Function to execute when the editor content is validated.",
        required: false,
      },
    ],
    preview: (
      <div style={{ height: "280px" }}>
        <CodeEditor
          data={{
            "src/index.js":
              "import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport './index.css';\nimport App from './App';\n\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(\n    <React.StrictMode>\n        <App />\n    </React.StrictMode>\n);",
            "src/index.css":
              "body { margin: 0; font-family: Arial, sans-serif; }",
          }}
          options={{ readOnly: false }}
          theme="vs-dark"
          width="100%"
          height="600px"
          onChange={(newValue: any) =>
            console.log("Content changed:", newValue)
          }
        />
      </div>
    ),
    usage: `
      import React from 'react';
      import { CodeEditor } from '@kodebloxui/core';

      const ExampleCodeEditor = () => (
        <CodeEditor
          data={{
            "src/index.js":
              "import React from 'react';\\nimport ReactDOM from 'react-dom/client';\\nimport './index.css';\\nimport App from './App';\\n\\nconst root = ReactDOM.createRoot(document.getElementById('root'));\\nroot.render(\\n    <React.StrictMode>\\n        <App />\\n    </React.StrictMode>\\n);",
            "src/index.css":
              "body { margin: 0; font-family: Arial, sans-serif; }",
          }}
          options={{ readOnly: false }}
          theme="vs-dark"
          width="100%"
          height="600px"
          onChange={(newValue: any) => console.log("Content changed:", newValue)}
        />
      );
    `,
  },
  {
    title: "ScrollAnimationWrapper",
    path: "components/ScrollAnimationWrapper",
    description:
      "A wrapper component that applies a CSS animation class to its children when they scroll into view.",
    props: [
      {
        name: "children",
        type: "ReactNode",
        description: "The elements to be rendered inside the wrapper.",
        required: true,
      },
      {
        name: "animationClass",
        type: `"fadeIn" | "fadeInUp" | "fadeInDown" | "fadeInLeft" | "fadeInRight" | "scaleUp" | "slideUp" | "slideDown" | "slideLeft" | "slideRight" | "rotateIn" | string`,
        description:
          "CSS class that defines the animation to apply when the element comes into view.",
        required: true,
        propType: "options",
      },
      {
        name: "element",
        type: "ElementType",
        description:
          'The HTML element type to render as the component root node. Defaults to "div".',
        required: false,
        defaultValue: "div",
      },
      {
        name: "className",
        type: "string",
        description: "Additional class names to be applied to the element.",
        required: false,
      },
    ],
    preview: (
      <div
        style={{
          height: 300,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <ScrollAnimationWrapper animationClass="fadeInUp" element="section">
          <div className="content">
            This animate when scrolled into view. please look into the props and
            try updating the with different types of animate
          </div>
        </ScrollAnimationWrapper>
      </div>
    ),
    usage: `
    import React from 'react';
    import { ScrollAnimationWrapper } from '@kodebloxui/core';
    
    const Example = () => (
      <ScrollAnimationWrapper animationClass="fadeInUp" element="section">
        <div className="content">This will fade in up when scrolled into view.</div>
      </ScrollAnimationWrapper>
    );
  `,
    render: (props) => {
      const { animationClass } = props;
      return (
        <div
          style={{
            height: 300,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <ScrollAnimationWrapper
            animationClass={animationClass || "fadeIn"}
            {...props}>
            <div className="content">
              This animate when scrolled into view. please look into the props
              and try updating the with different types of animate
            </div>
          </ScrollAnimationWrapper>
        </div>
      );
    },
  },
  {
    title: "ErrorBoundary",
    path: "components/ErrorBoundary",
    description:
      "A component that acts as an error boundary to catch JavaScript errors in its child component tree, log those errors, and provide a fallback UI.",
    props: [
      {
        name: "children",
        type: "ReactNode",
        description:
          "The children components that will be wrapped by the error boundary.",
        required: true,
      },
      {
        name: "fallbackText",
        type: "string",
        description: "The text to display in the fallback UI.",
        required: false,
      },
      {
        name: "className",
        type: "string",
        description: "Optional className for the wrapper div.",
        required: false,
      },
      {
        name: "style",
        type: "CSSProperties",
        description: "Optional inline styles for the wrapper div.",
        required: false,
      },
      {
        name: "fallbackComponent",
        type: "ReactNode",
        description:
          "Optional custom fallback component to render when an error is caught.",
        required: false,
      },
      {
        name: "onError",
        type: "(error: Error) => void",
        description: "Optional callback function to handle the error.",
        required: false,
      },
    ],
    preview: (
      <div
        style={{
          height: 300,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <ErrorBoundary fallbackText="Something went wrong!">
          <div>
            <ErrorTrigger />
          </div>
        </ErrorBoundary>
      </div>
    ),
    usage: `
      import React from 'react';
      import { ErrorBoundary } from './ErrorBoundary';

      const App = () => {
        const ErrorTrigger = () => {
          throw new Error("An intentional error!");
        };
        return (
          <ErrorBoundary fallbackText="Something went wrong!">
            <ErrorTrigger />
          </ErrorBoundary>
        );
      };

      export default App;
    `,
    render: (props) => (
      <div
        style={{
          height: 300,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <ErrorBoundary {...props}>
          <div>
            <ErrorTrigger />
          </div>
        </ErrorBoundary>
      </div>
    ),
  },
  // Add more components as needed
];
