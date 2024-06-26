import { PreApproval, PreApprovalPlan } from 'mercadopago';
import { PreApprovalRequest, PreApprovalResponse } from 'mercadopago/dist/clients/preApproval/commonTypes';
import { PreApprovalPlanRequest, PreApprovalPlanResponse } from 'mercadopago/dist/clients/preApprovalPlan/commonTypes';

export const preApproval = new PreApproval({
    accessToken: ""
})

export const preApprovalPlan = new PreApprovalPlan({
    accessToken: ""
})

// export async function createPlan(): Promise<PreApprovalResponse> {

//     const plan: PreApprovalRequest = {
//         reason: 'Plan de suscripción mensual',
//         auto_recurring: {
//             frequency: 1,
//             frequency_type: 'months',
//             transaction_amount: 10,
//             currency_id: 'ARS'
//         }
//     }

//     try {

//         const response = await preApproval.create({
//             body: plan
//         });

//         return response;

//     } catch (error) {
//         throw error;
//     }
// }

export async function createPlan(): Promise<PreApprovalPlanResponse> {

    const plan: PreApprovalPlanRequest = {
        reason: 'Plan de suscripción mensual',
        auto_recurring: {
            frequency: 1,
            frequency_type: 'months',
            transaction_amount: 10,
            currency_id: 'ARS'
        }
    }

    try {

        const response = await preApprovalPlan.create({
            body: plan
        });

        return response;

    } catch (error) {
        throw error;
    }
}
