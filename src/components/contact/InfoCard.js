"use client";
import React from "react";


export default function InfoCard({ icon, title, content }) {
  return (
    <div className="flex items-center justify-start gap-4">
      <div className="p-4 bg-alert/5 rounded-lg ">
        {icon}
      </div>
      <div className="flex flex-col">
        <h4 className="text-xl text-accent dark:text-dark-accent font-semibold">
          {title}
        </h4>
        <p className="text-lg text-text dark:text-dark-text  break-words">
          {content}
        </p>
      </div>
    </div>
  );
}
