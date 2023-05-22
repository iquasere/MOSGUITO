export async function fetchUniprotColumns() {
  const response = await fetch('https://rest.uniprot.org/configure/uniprotkb/result-fields');
  if (!response.ok) {
    throw new Error('Request failed with status ' + response.status);
  }
  const data = await response.json();
  console.log(data);
  return createUniprotData(data);
}

function createUniprotData(data) {
  const uniprotColumns = {};
  const uniprotDatabases = {};

  data.forEach(elem => {
    if (elem.isDatabaseGroup) {
      uniprotDatabases[elem.groupName] = createFieldList(elem.fields);
    } else {
      uniprotColumns[elem.groupName] = createFieldList(elem.fields);
    }
  });

  console.log(uniprotColumns);
  console.log(uniprotDatabases);

  return { uniprotColumns, uniprotDatabases };
}

function createFieldList(fields) {
  return fields.map(field => [field.label, field.name]);
}
