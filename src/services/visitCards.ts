import { VisitCards } from "../types/VisitCards"
import { storage } from "../libs/firebase"
import { ref, listAll, getDownloadURL } from "firebase/storage"

export const getAll = async () => {
  const list: VisitCards[] = []

  const cardImagesFolder = ref(storage, "cardImages")
  const visitCardsList = await listAll(cardImagesFolder)

  for (const item of visitCardsList.items) {
    const visitCardsUrl = await getDownloadURL(item)

    list.push({
      name: item.name,
      url: visitCardsUrl
    })
  }

  return list
}