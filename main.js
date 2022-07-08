const arrayData = [];

arrayData.push('Соколова Юлия Данииловна');
arrayData.push('Соловьева Мия Алиевна');
arrayData.push('Тихонова Дарья Дмитриевна');
arrayData.push('Новиков Александр Игоревич');
arrayData.push('Белов Александр Глебович');
arrayData.push('Боброва Арина Егоровна');
arrayData.push('Широков Марк Макарович');
arrayData.push('Крылов Егор Артурович');
arrayData.push('Ермаков Александр Максимович');
arrayData.push('Борисов Даниил Павлович');

document.write(`<h1 align="center">Всего пользователей: ${arrayData.length}</h1>`);

arrayData.forEach((item, index) => document.write(`<h1 align="center">ID пользователя ${index}: ${item}</h1>`));