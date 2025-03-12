"use client"
import { useEffect, useRef, useState } from "react"
import { formPagesData } from "../utils/utils"
import { v4 as uuidv4 } from "uuid"
import { collection, addDoc, getDocs, query, orderBy, doc, updateDoc } from "firebase/firestore"
import db from "../../../utils/firestore"

export default function DataEntryPage({ tabId }) {
  const [docs, setDocs] = useState([])
  const [editingId, setEditingId] = useState(null)

  const formProps = formPagesData.find((d) => d.tabId === tabId)
  const { formTitle, formInputs, dbCollectionId } = formProps

  const formRef = useRef(null)

  async function addToDB(data) {
    try {
      const docRef = await addDoc(collection(db, dbCollectionId), data)
      getAllDocsFromDB()
      alert("Data added successfully!")
      formRef.current.reset()
      console.log("Document added with ID:", docRef.id)
    } catch (error) {
      console.error("Error adding document:", error)
    }
  }

  async function updateInDB(id, data) {
    try {
      const docRef = doc(db, dbCollectionId, id)
      await updateDoc(docRef, data)
      getAllDocsFromDB()
      alert("Data updated successfully!")
      formRef.current.reset()
      setEditingId(null)
      console.log("Document updated with ID:", id)
    } catch (error) {
      console.error("Error updating document:", error)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const values = Object.fromEntries(formData)
    const formattedValues = {
      ...values,
      orderId: Number(values.orderId),
      isActive: values?.isActive === "on" ? true : false,
    }

    if (editingId) {
      updateInDB(editingId, formattedValues)
    } else {
      addToDB(formattedValues)
    }
  }

  async function getAllDocsFromDB() {
    const q = query(collection(db, dbCollectionId), orderBy("orderId", "asc"))
    const querySnapshot = await getDocs(q)
    const docs = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    setDocs(docs)
  }

  function handleEditClick(docData) {
    setEditingId(docData.id)

    // Populate the form with the document data
    setTimeout(() => {
      // We need setTimeout to ensure the form is ready
      if (formRef.current) {
        const inputs = formRef.current.elements

        // Set values for each input
        for (let i = 0; i < inputs.length; i++) {
          const input = inputs[i]
          if (input.name && docData[input.name] !== undefined) {
            if (input.type === "checkbox") {
              input.checked = docData[input.name]
            } else {
              input.value = docData[input.name]
            }
          }
        }
      }
    }, 0)
  }

  function handleCancelEdit() {
    setEditingId(null)
    formRef.current.reset()
  }

  async function handleToggleActive(docId, currentStatus) {
    try {
      const docRef = doc(db, dbCollectionId, docId)
      await updateDoc(docRef, {
        isActive: !currentStatus,
      })
      getAllDocsFromDB()
    } catch (error) {
      console.error("Error updating active status:", error)
    }
  }

  useEffect(() => {
    getAllDocsFromDB()
  }, [])

  return (
    <div className="w-full h-full flex gap-4">
      <div className="w-fit min-w-[500px]">
        <div className="bg-white pt-4 h-full rounded-md shadow-lg p-4 flex flex-col gap-4">
          <h2 className="font-semibold text-xl">{editingId ? `Edit ${formTitle}` : formTitle}</h2>
          <form ref={formRef} onSubmit={handleSubmit} action="post" className="flex flex-col items-start gap-6">
            {formInputs.map((input) => {
              return input.type === "checkbox" ? (
                <div key={uuidv4()} className="flex items-center gap-2">
                  <label className="" htmlFor={input.name}>
                    {input.label}:
                  </label>
                  <input
                    required={input.required}
                    className="border border-solid border-gray-300 rounded-sm px-4 py-2 w-4 h-4"
                    type={input.type}
                    id={input.name}
                    name={input.name}
                  />
                </div>
              ) : (
                <div key={uuidv4()} className="flex flex-col gap-2">
                  <label className="" htmlFor={input.name}>
                    {input.label}:
                  </label>
                  <input
                    required={input.required}
                    className="border border-solid border-gray-300 rounded-sm px-4 py-2"
                    type={input.type}
                    id={input.name}
                    name={input.name}
                  />
                </div>
              )
            })}
            <div className="flex gap-2">
              <button
                type="submit"
                className={`rounded-md ${editingId ? "bg-green-600" : "bg-blue-600"} text-white px-4 py-2 self-start cursor-pointer`}
              >
                {editingId ? "Update" : "Submit"}
              </button>
              {editingId && (
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="rounded-md bg-gray-500 text-white px-4 py-2 self-start cursor-pointer"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      <div className="w-full bg-white p-4 rounded-md shadow-md">
        <h2 className="font-semibold text-xl mb-4">Stored Data</h2>

        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Order ID</th>
              {formInputs
                .filter((input) => input.name !== "orderId" && input.name !== "isActive")
                .map((input) => (
                  <th key={input.name} className="border border-gray-300 p-2">
                    {input.label}
                  </th>
                ))}
              <th className="border border-gray-300 p-2">Active</th>
              <th className="border border-gray-300 p-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {docs.map((doc) => (
              <tr key={doc.id} className="bg-white border-b border-gray-300">
                <td className="border border-gray-300 p-2">{doc.orderId}</td>
                {formInputs
                  .filter((input) => input.name !== "orderId" && input.name !== "isActive")
                  .map((input) => (
                    <td key={input.name} className="border border-gray-300 p-2">
                      {doc[input.name]}
                    </td>
                  ))}
                <td className="border border-gray-300 p-2 text-center">
                  <input
                    type="checkbox"
                    checked={doc.isActive}
                    onChange={() => handleToggleActive(doc.id, doc.isActive)}
                    className="w-4 h-4 cursor-pointer"
                  />
                </td>
                <td className="border border-gray-300 p-2">
                  <button
                    onClick={() => handleEditClick(doc)}
                    className="px-2 py-1 cursor-pointer text-sm text-blue-500 bg-gray-200 rounded-sm"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

