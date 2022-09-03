
    <div className="flex justify-center items-center h-5/6 flex-col">
    <form
      className="w-1/2 bg-olive-green rounded-lg text-base p-8"
      onSubmit={handleSubmit}
    >
      <h3 className="text-4xl font-bold text-center text-gray-900 mb-8">
        Cadastro de entidade
      </h3>

      <div>
        <fieldset className="font-semibold my-2 text-lg">
          Informações da Entidade
        </fieldset>
        <div className="flex mb-2">
          <div className="mr-4 w-1/2">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Nome
            </label>
            <Input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              errors={errors}
            />
          </div>
          {/* <div className="w-1/2">
            <label
              htmlFor="company_name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Razão Social
            </label>
            <Input
              type="text"
              id="company_name"
              name="company_name"
              onChange={handleChange}
              errors={errors}
            />
          </div>             */}
        </div>

        <div className="flex my-4">
          <div className="mr-4 w-1/2">
            <label
              htmlFor="cnpj"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              CNPJ
            </label>
            <Input
              type="text"
              id="cnpj"
              name="cnpj"
              onChange={handleChange}
              errors={errors}
            />
          </div>
          <div className="w-1/2">
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Telefone
            </label>
            <Input
              type="text"
              id="phone"
              name="phone"
              onChange={handleChange}
              errors={errors}
            />
          </div>
        </div>
        {/* <div className="">
            <label
              htmlFor="license"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Licença para operação
            </label>
            <Input
              type="file"
              id="license"
              name="license"
              onChange={handleChange}
              errors={errors}
            />
        </div> */}
      </div>

      <fieldset className="font-semibold my-2 text-lg">
        Informações de Login
      </fieldset>
      <div className="flex my-2">
        <div className="mr-4 w-1/2">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Email da Entidade
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            errors={errors}
          />
        </div>
        <div className="w-1/2">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Senha
          </label>
          <Input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            errors={errors}
          />
        </div>
      </div>

      <div className="btn-flex mt-4">
        <button
          type="submit"
          className="focus:outline-none text-black  bg-white hover:bg-gray focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          value="Submit"
        >
          Criar conta
        </button>
      </div>
    </form>
  </div>