import { useState, useCallback } from "react";
import {
  type IProposalService,
  type ProposalPayload,
  defaultProposalService,
} from "@/lib/services/proposalService";

export interface UseProposalFormOptions {
  initialPropertyType?: string;
  initialServiceType?: string;
  service?: IProposalService;
}

export function useProposalForm(options: UseProposalFormOptions = {}) {
  const {
    initialPropertyType = "",
    initialServiceType = "",
    service = defaultProposalService,
  } = options;

  const [formData, setFormData] = useState<ProposalPayload>({
    name: "",
    email: "",
    phone: "",
    propertyType: initialPropertyType,
    serviceType: initialServiceType,
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = useCallback((field: keyof ProposalPayload, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }, []);

  const resetForm = useCallback(() => {
    setIsSubmitted(false);
    setIsSubmitting(false);
    setError(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      propertyType: initialPropertyType,
      serviceType: initialServiceType,
      message: "",
    });
  }, [initialPropertyType, initialServiceType]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      setError(null);

      try {
        const response = await service.submitProposal(formData);
        if (response.success) {
          setIsSubmitted(true);
        } else {
          setError(response.message || "Failed to submit proposal request.");
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unexpected error occurred.");
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, service]
  );

  return {
    formData,
    isSubmitting,
    isSubmitted,
    error,
    handleChange,
    resetForm,
    handleSubmit,
  };
}
