import React from "react";
import {Button} from "@material-ui/core";
import {loadStripe, StripePaymentRequestButtonElementClickEvent} from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51IzwHpSD2SVNlhIBRyPZ6S6cyRol7gTcLpFsY4pi3u9nIpEgs266lzWDY5rkIMn8jVNFXQeNVsRVWdCLdcUnvsMp0042Fn7QNx")



export const PaymentForm = () =>{

    
    async function handleDonation1(){
        const stripe = await stripePromise;

        await stripe?.redirectToCheckout({
            lineItems: [{
                price: "price_1J06RnSD2SVNlhIBGKbjaIZK",
                quantity: 1
            }],
            mode: "payment",
            successUrl: "http://localhost:3000/",
            cancelUrl: "http://localhost:3000/",
        })
    }
    async function handleDonation2(){
        const stripe = await stripePromise;

        await stripe?.redirectToCheckout({
            lineItems: [{
                price: "price_1J06RnSD2SVNlhIB1Bdk38oi",
                quantity: 1
            }],
            mode: "payment",
            successUrl: "http://localhost:3000/",
            cancelUrl: "http://localhost:3000/",
        })
    }
    async function handleDonation3(){
        const stripe = await stripePromise;

        await stripe?.redirectToCheckout({
            lineItems: [{
                price: "price_1J06RnSD2SVNlhIBGqRbJdtk",
                quantity: 1
            }],
            mode: "payment",
            successUrl: "http://localhost:3000/",
            cancelUrl: "http://localhost:3000/",
        })
    }
    async function handleDonation4(){
        const stripe = await stripePromise;

        await stripe?.redirectToCheckout({
            lineItems: [{
                price: "price_1J06RnSD2SVNlhIBQZZrbtDR",
                quantity: 1
            }],
            mode: "payment",
            successUrl: "http://localhost:3000/",
            cancelUrl: "http://localhost:3000/",
        })
    }
    async function handleDonation5(){
        const stripe = await stripePromise;

        await stripe?.redirectToCheckout({
            lineItems: [{
                price: "price_1J06RnSD2SVNlhIBZu0M1I0r",
                quantity: 1
            }],
            mode: "payment",
            successUrl: "http://localhost:3000/",
            cancelUrl: "http://localhost:3000/",
        })
    }

    
   
    return(
        <>
        
            <form>
                <h1>Donation</h1>
                <div>
                    <Button type="button" variant="contained" color="secondary" onClick={handleDonation1}>Donate 100 PKR</Button>
                    <Button type="button" variant="contained" color="secondary" onClick={handleDonation2}>Donate 500 PKR</Button>
                    <Button type="button" variant="contained" color="secondary" onClick={handleDonation3}>Donate 1000 PKR</Button>
                    <Button type="button" variant="contained" color="secondary" onClick={handleDonation4}>Donate 5000 PKR</Button>
                    <Button type="button" variant="contained" color="secondary" onClick={handleDonation5}>Donate 10000 PKR</Button>
                </div>
            </form>
        </>
    )
}