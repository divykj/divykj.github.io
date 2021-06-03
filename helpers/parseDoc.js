import admin from "./firebaseAdmin";

const parseDoc = (doc) => ({
  id: doc.id,
  ...Object.entries(doc.data())
    .map(([key, value]) => {
      if (value instanceof admin.firestore.Timestamp)
        return [key, value.toMillis()];
      return [key, value];
    })
    .reduce((result, [key, value]) => ({ ...result, [key]: value }), {}),
});

export default parseDoc;
