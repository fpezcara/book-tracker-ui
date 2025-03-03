const Registration = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const formValues = {
      email: formData.get("email"),
      password: formData.get("password"),
      passwordConfirmation: formData.get("password-confirmation"),
    };

    console.log(formValues);
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email address" />
        <input type="password" name="password" placeholder="Password" />
        <input
          type="password"
          name="password-confirmation"
          placeholder="Password Confirmation"
        />
        <button type="submit">Register</button>
      </form>
    </section>
  );
};

export default Registration;
