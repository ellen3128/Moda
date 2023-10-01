<template>
    <main class="wrap">
        <section class="container">
            <div class="container_heading">
                <h2>Terms & Conditions</h2>
            </div>
            <div class="container_content">
                <h2>1. Acceptance of Terms</h2>
                <p>By accessing and using our website, you agree to comply with and be bound by these Terms and Conditions.
                </p>
                <h2>2. Use of the Website</h2>
                <p>By using this website, you represent that you are at least the age of majority in your state or province
                    of residence. Unauthorized use of this website may result in a claim for damages and/or be a criminal
                    offense.</p>
                <h2>3. Product & Pricing</h2>
                <p>All products listed on the website are subject to availability, and we cannot guarantee that items will
                    be in stock. We reserve the right to discontinue any product at any time. Prices are subject to change
                    without notice.</p>
                <h2>4. Return & Refund Policy</h2>
                <p>We accept returns within 30 days of the original purchase date. Products must be returned in their
                    original condition. For defective or damaged products, we offer a full refund or exchange.</p>
                <h2>5. Liability</h2>
                <p>We take no responsibility and assume no liability for any loss or damages incurred due to the use of this
                    website or the products purchased from it.</p>
                <h2>6. Governing Law</h2>
                <p>Any disputes relating to these Terms & Conditions will be subject to the jurisdiction of the courts
                    located within [Your City/State/Country].</p>
                <h2>7. Changes to Terms</h2>
                <p>We reserve the right to modify these Terms & Conditions at any time, so please review them frequently.
                    Changes and clarifications will take effect immediately upon their posting on the website.</p>
                <h2>8. Contact</h2>
                <p>If you have any questions regarding these Terms & Conditions, you can contact us using the contact
                    information provided at the bottom of this page.</p>
            </div>
            <div class="container_nav">
                <small>By clicking 'Accept' you are agreeing to our terms and conditions.</small>
                <a class="button" href="#" @click="showAcceptAlert">Accept</a>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    methods: {
        showAcceptAlert() {
            alert("You have accepted the Terms & Conditions.");
        }
    }
}
</script>

<style scoped>
.wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    /* Makes the content vertically centered */
    /* background-color: #f6f8fa; */
}

.container {
    width: 70%;
    max-width: 800px;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}

.container_heading {
    border-bottom: 2px solid #e9ecef;
    margin-bottom: 20px;
    padding-bottom: 15px;
}

h2 {
    font-size: 24px;
    color: #333;
}

.container_content p {
    font-size: 16px;
    line-height: 1.5;
    color: #555;
    margin-bottom: 20px;
}

.container_nav {
    border-top: 2px solid #e9ecef;
    padding-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.container_nav small {
    color: #777;
    font-size: 14px;
}

.button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.button:hover {
    background-color: #0056b3;
}
</style>