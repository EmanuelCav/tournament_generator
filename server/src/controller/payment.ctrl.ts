import { Request, Response } from "express";
import { PreApprovalRequest } from "mercadopago/dist/clients/preApproval/commonTypes";

import Subscription from "../models/subscription";

import { createPlan, preApproval } from "../utils/mpago";

export const CreatePayment = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params

    try {

        const subscription = await Subscription.findById(id)

        if(!subscription) {
            return res.status(400).json({ message: "Subsciprtion does not exists" })
        }

        const plan = await createPlan()

        const newSubscription: PreApprovalRequest = {
            preapproval_plan_id: plan.id,
            payer_email: 'test_user_123456@testuser.com',
            back_url: 'https://www.tu-sitio.com/success',
            reason: 'Suscripción mensual',
            auto_recurring: {
                frequency: 1,
                frequency_type: 'months',
                transaction_amount: 10,
                currency_id: 'ARS', // O la moneda que estés usando
                start_date: new Date().toString(),
                end_date: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toString() // Duración de 1 año
            }
        }

        const response = await preApproval.create({
            body: newSubscription
        });

        return res.status(200).json(response)

    } catch (error) {
        throw error
    }

}