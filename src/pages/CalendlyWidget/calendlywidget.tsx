import { useEffect } from "react";

interface CalendlyWidgetProps {
  url: string;
  primaryColor?: string; 
  height?: string; 
  minWidth?: string;
}

const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({
  url,
  primaryColor = "000000",
  height = "700px",
  minWidth = "320px",
}) => {
  useEffect(() => {
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





