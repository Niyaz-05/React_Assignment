function Step3({ formData }) {
  return (
    <>
      <h3>Confirm Details</h3>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Username: {formData.username}</p>
    </>
  );
}

export default Step3;
