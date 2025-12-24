function Step2({ formData, setFormData, errors }) {
  return (
    <>
      <input
        placeholder="Username"
        value={formData.username}
        onChange={(e) =>
          setFormData({ ...formData, username: e.target.value })
        }
      />
      {errors.username && <p className="error">{errors.username}</p>}

      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) =>
          setFormData({ ...formData, password: e.target.value })
        }
      />
      {errors.password && <p className="error">{errors.password}</p>}
    </>
  );
}

export default Step2;
