import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Link } from "react-router-dom";
import { UserService } from "../services/UserService";

export function CreateView() {
  const methods = useForm();
  const [isLoading, setIsLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState()
  const { handleSubmit, register } = methods

    const onSubmit = handleSubmit(async ({ name, email, dateOfBirth, sex }) => {
        setIsLoading(true)
        const { error } = await UserService.create({ name, email, dateOfBirth, sex });
        setIsLoading(false)
        setErrorMsg(error)
    });

  return (
    <>
      <Link to="/">Home</Link>
      <FormProvider {...methods}>
        <form onSubmit={onSubmit}>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <label htmlFor="name">Name</label>
            <input id="name" {...register("name")} />
            <label htmlFor="email">Email</label>
            <input id="email" {...register("email")} type="email" />
            <label htmlFor="dateOfBirth" >Date of Birth</label>
            <input id="dateOfBirth" {...register("dateOfBirth")} type="date" />
            <label htmlFor="sex">Sex</label>
            <select id="sex" {...register("sex")}>
              <option value="female">female</option>
              <option value="male">male</option>
            </select>
          </div>
          <input type="submit" disabled={isLoading} />
        </form>
      </FormProvider>
      {isLoading && "Creting user..."}
      {errorMsg && <p style={{color: 'red'}}>{errorMsg}</p>}
    </>
  );
}
