import React, { useState } from "react";
import { Check } from "lucide-react";

const PersonalityConfig = () => {
  const [selectedStyle, setSelectedStyle] = useState("friendly");

  const styles = [
    {
      id: "professional",
      title: "Professional",
      description: "Formal, precise, and business-focused communication",
      example:
        "I can assist you in finding products that meet your specific requirements. Would you like to explore our current collection?",
      traits: [
        "Uses formal language",
        "Focuses on accuracy and clarity",
        "Maintains professional distance",
        "Emphasizes expertise and efficiency",
      ],
    },
    {
      id: "friendly",
      title: "Friendly",
      description: "Warm, helpful, and conversational tone",
      example:
        "Hi there! Id love to help you find the perfect item. What kind of things are you interested in?",
      traits: [
        "Uses conversational language",
        "Balances warmth with professionalism",
        "Shows enthusiasm and empathy",
        "Maintains helpful attitude",
      ],
    },
    {
      id: "casual",
      title: "Casual",
      description: "Relaxed, approachable, and informal communication",
      example:
        "Hey! Lets find you something awesome. What are you looking for today?",
      traits: [
        "Uses everyday language",
        "More relaxed tone",
        "Incorporates common expressions",
        "Feels like talking to a friend",
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-2">Communication Style</h3>
        <p className="text-gray-500 text-sm">
          Choose how your AI assistant will communicate with customers
        </p>
      </div>

      <div className="grid gap-4">
        {styles.map((style) => (
          <div
            key={style.id}
            onClick={() => setSelectedStyle(style.id)}
            className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
              selectedStyle === style.id
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <div className="flex items-start gap-4">
              <div
                className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mt-1 ${
                  selectedStyle === style.id
                    ? "border-blue-500 bg-blue-500"
                    : "border-gray-300"
                }`}
              >
                {selectedStyle === style.id && (
                  <Check className="h-4 w-4 text-white" />
                )}
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{style.title}</h4>
                  <span className="text-sm text-gray-500">
                    {selectedStyle === style.id && "Selected"}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-3">
                  {style.description}
                </p>

                <div className="bg-white rounded-md p-3 border mb-3">
                  <div className="text-sm text-gray-500 mb-1">
                    Example Response:
                  </div>
                  <div className="text-sm">{style.example}</div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {style.traits.map((trait, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <div className="w-1 h-1 rounded-full bg-gray-400" />
                      {trait}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedStyle && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium mb-2">
            Selected Style: {styles.find((s) => s.id === selectedStyle)?.title}
          </h4>
          <p className="text-sm text-gray-600">
            Your AI assistant will communicate using a {selectedStyle} tone. You
            can further customize specific responses below.
          </p>
        </div>
      )}
    </div>
  );
};

export default PersonalityConfig;
