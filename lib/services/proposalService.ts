export interface ProposalPayload {
  name: string;
  email: string;
  phone?: string;
  propertyType?: string;
  serviceType?: string;
  message?: string;
}

export interface ProposalServiceResponse {
  success: boolean;
  message?: string;
}

export interface IProposalService {
  submitProposal(payload: ProposalPayload): Promise<ProposalServiceResponse>;
}

export class MockProposalService implements IProposalService {
  async submitProposal(payload: ProposalPayload): Promise<ProposalServiceResponse> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log("Proposal payload submitted:", payload);
    return { success: true };
  }
}

export const defaultProposalService: IProposalService = new MockProposalService();
