import { useEffect } from "react";

interface CalendlyWidgetProps {
  url: string; // URL of the Calendly schedule
  primaryColor?: string; // Optional primary color customization
  height?: string; // Optional height customization
  minWidth?: string; // Optional minimum width customization
}

const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({
  url,
  primaryColor = "000000", // Default primary color
  height = "700px", // Default height
  minWidth = "320px", // Default min-width
}) => {
  useEffect(() => {
    // Dynamically load the Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Remove the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget w-3/4 mx-auto"
      data-url={`${url}?primary_color=${primaryColor}`}
      style={{ minWidth, height }}
    ></div>
  );
};

export default CalendlyWidget;
