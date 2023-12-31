import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

export const useFetchDocument = (docColletion, id) => {

    const [document, setDocument] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)


    useEffect (() => {

        async function loadDocument() {
                setLoading(false)

            try {
                const docRef = await doc(db, docColletion, id)
                const docSnap = await getDoc(docRef)

                setDocument(docSnap.data())

            } catch (error) {

                console.log(error)
                setError(error.mensage)

                setLoading(true)

            }

        }

        loadDocument()

    }, [docColletion, id])

    return {document, loading, error}

}