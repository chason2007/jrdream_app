"use client";

import { useEffect } from "react";
import type { BaseLocaleProps } from "@/types/common";
import type { ProposalModalContent } from "@/lib/content";
import { useProposalForm } from "@/hooks/useProposalForm";
import type { IProposalService } from "@/lib/services/proposalService";

export interface ProposalModalProps extends BaseLocaleProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
  readonly content: ProposalModalContent;
  readonly proposalService?: IProposalService;
}

export default function ProposalModal({
  isOpen,
  onClose,
  lang,
  content,
  proposalService,
}: Readonly<ProposalModalProps>) {
  const modalDict = content;
  const isAr = lang === "ar";

  const {
    formData,
    isSubmitting,
    isSubmitted,
    error,
    handleChange,
    resetForm,
    handleSubmit,
  } = useProposalForm({
    initialPropertyType: modalDict.propertyOptions[0] || "",
    initialServiceType: modalDict.serviceOptions[0] || "",
    service: proposalService,
  });

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock scroll when open & reset form on close
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      resetForm();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, resetForm]);

  if (!isOpen) return null;

  return (
    <dialog
      open={isOpen}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-ink/80 backdrop-blur-md transition-opacity duration-300 w-full h-full max-w-none max-h-none border-none bg-transparent"
      aria-labelledby="modal-title"
    >
      <div className="fixed inset-0" aria-hidden="true" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-ink border border-brass/30 rounded-lg shadow-2xl overflow-hidden z-10 my-8">
        <div className="h-1.5 w-full bg-gradient-to-r from-brass via-brass-2 to-brass" />

        <div className="p-6 sm:p-8">
          <button
            onClick={onClose}
            className="absolute top-5 end-5 p-2 text-stone hover:text-bone transition-colors rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brass"
            aria-label={modalDict.closeBtn}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {!isSubmitted ? (
            <>
              <h2
                id="modal-title"
                className={`text-2xl sm:text-3xl font-bold text-bone mb-2 ${
                  isAr ? "font-serif" : "font-serif"
                }`}
              >
                {modalDict.title}
              </h2>
              <p className="text-sm text-stone mb-6 leading-relaxed">
                {modalDict.subtitle}
              </p>

              {error && (
                <div className="mb-4 p-3 bg-red-950/50 border border-red-500/50 rounded-sm text-red-200 text-xs">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-stone uppercase mb-1.5">
                      {modalDict.nameLabel} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder={modalDict.namePlaceholder}
                      className="w-full px-3.5 py-2.5 bg-ink-2 border border-hairline rounded-sm text-bone placeholder-stone/50 text-sm focus:outline-none focus:border-brass focus:ring-1 focus:ring-brass transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-stone uppercase mb-1.5">
                      {modalDict.emailLabel} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder={modalDict.emailPlaceholder}
                      className="w-full px-3.5 py-2.5 bg-ink-2 border border-hairline rounded-sm text-bone placeholder-stone/50 text-sm focus:outline-none focus:border-brass focus:ring-1 focus:ring-brass transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-stone uppercase mb-1.5">
                      {modalDict.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone || ""}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder={modalDict.phonePlaceholder}
                      className="w-full px-3.5 py-2.5 bg-ink-2 border border-hairline rounded-sm text-bone placeholder-stone/50 text-sm focus:outline-none focus:border-brass focus:ring-1 focus:ring-brass transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-stone uppercase mb-1.5">
                      {modalDict.propertyTypeLabel}
                    </label>
                    <select
                      value={formData.propertyType || ""}
                      onChange={(e) =>
                        handleChange("propertyType", e.target.value)
                      }
                      className="w-full px-3.5 py-2.5 bg-ink-2 border border-hairline rounded-sm text-bone text-sm focus:outline-none focus:border-brass focus:ring-1 focus:ring-brass transition-colors"
                    >
                      {modalDict.propertyOptions.map((option) => (
                        <option key={option} value={option} className="bg-ink text-bone">
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-stone uppercase mb-1.5">
                    {modalDict.serviceTypeLabel}
                  </label>
                  <select
                    value={formData.serviceType || ""}
                    onChange={(e) =>
                      handleChange("serviceType", e.target.value)
                    }
                    className="w-full px-3.5 py-2.5 bg-ink-2 border border-hairline rounded-sm text-bone text-sm focus:outline-none focus:border-brass focus:ring-1 focus:ring-brass transition-colors"
                  >
                    {modalDict.serviceOptions.map((option) => (
                      <option key={option} value={option} className="bg-ink text-bone">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-stone uppercase mb-1.5">
                    {modalDict.messageLabel}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message || ""}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder={modalDict.messagePlaceholder}
                    className="w-full px-3.5 py-2.5 bg-ink-2 border border-hairline rounded-sm text-bone placeholder-stone/50 text-sm focus:outline-none focus:border-brass focus:ring-1 focus:ring-brass transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-7 py-3 bg-brass text-ink font-medium text-sm rounded-sm transition-colors hover:bg-brass-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brass disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-4 w-4 text-ink"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        <span>Processing...</span>
                      </>
                    ) : (
                      modalDict.submitBtn
                    )}
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-12 h-12 bg-brass/10 border border-brass text-brass rounded-full flex items-center justify-center mx-auto">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-bone">
                {modalDict.successTitle}
              </h3>
              <p className="text-sm text-stone max-w-md mx-auto leading-relaxed">
                {modalDict.successMsg}
              </p>
              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 border border-brass/70 text-brass text-sm rounded-sm hover:bg-brass/10 transition-colors"
                >
                  {modalDict.closeBtn}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </dialog>
  );
}
