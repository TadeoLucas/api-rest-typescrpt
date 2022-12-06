

export const getUsersDataForConsultinOk = {
    type: 'object',
    example: {
        data: {
            manifest: {
            cardId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
            practiceRecordId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
            axisManifestOD: {
                variableId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
                variableRecordId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
                value: "100"
            },
            cylManifestOD: {
                variableId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
                variableRecordId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
                value: "-1.50"
            },
            sphManifestOD: {
                variableId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
                variableRecordId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
                value: "-1.00"
            },
            addManifestOD: {
                variableId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
                variableRecordId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
                value: "+2.25"
            },
            axisManifestOS: {
                variableId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
                variableRecordId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
                value: "22"
            },
            cylManifestOS: {
                variableId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
                variableRecordId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
                value: "-1.50"
            },
            sphManifestOS: {
                variableId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
                variableRecordId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
                value: "-1.00"
            },
            addManifestOS: {
                variableId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
                variableRecordId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
                value: "+1.25"
            }
            },
            diagnosis: {
            cardId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
            practiceRecordId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
            diagnosisOD: {
                variableId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
                variableRecordId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
            },
            diagnosisOS: {
                variableId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
                variableRecordId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
            },
            diagnosisList: [
                "Miopía"
            ]
            }
        },
        message: "lens_prescription.get.succes",
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