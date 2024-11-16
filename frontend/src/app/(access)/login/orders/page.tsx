import LoginForm from "@/components/forms/login";

export default function OrderTrackPage() {
  return (
    <section className="access">
      <h1 className="section-title secondary">Track Your Order</h1>
      <div className="flex flex-row border justify-center items-center">
        <LoginForm />

        <div className="flex flex-row border justify-center items-start">
          <h1>Order Track Page</h1>
        </div>
      </div>
    </section>
  );
}
