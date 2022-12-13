

export const getUsersDataForConsultinOk = {
  type: 'object',
  example: {
    data: [
      {
        id: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
        account_name: "MAY_min-45",
        firstName: "firstName",
        lastName: "lastName",
        email: "testing@test.com.ar",
        status: "ACTIVE",
        updatedAt: "2022-12-13T00:11:03.668Z",
        createdAt: "2022-12-13T00:11:03.668Z"
      },
      true
    ],
    message: "user.create.succes",
    errors: []
  }

}

export const getUsersDataForConsultin400 = {
  type: 'object',
  example: {
    data: null,
    errors: ['the error stack'],
    message: 'the error message'
  }
}