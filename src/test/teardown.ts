import { db } from "../config/db";

const tearDownTests = async () => {
    // el cierre de coneccion a sequelize debe estar en este archivo
    // dado que es lo ultimo en ejecutarse luego de todas las suits de tests  
    console.log('Finished on tests');
    await db.sequelize.close();
};

export default tearDownTests;