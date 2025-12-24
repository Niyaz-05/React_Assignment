function Step1({ formData, setFormData, errors }) {
  return (
    <>
      <input
        placeholder="Name"
        value={formData.name}
        onChange={(e) =>
          setFormData({ ...formData, name: e.target.value })
        }
      />
      {errors.name && <p className="error">{errors.name}</p>}

      <input
        placeholder="Email"
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
      />
      {errors.email && <p className="error">{errors.email}</p>}
    </>
  );
}

export default Step1;
