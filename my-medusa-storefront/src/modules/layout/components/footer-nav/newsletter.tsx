import { useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import Spinner from "@modules/common/icons/spinner"

interface Message {
  type: string
  description: string
}

const NewsletterForm = () => {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<Message | null>(null)

  const subscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email) {
      setMessage({
        type: "error",
        description: "Email cannot be empty!",
      })
      return
    }
    setIsLoading(true)

    fetch("http://localhost:9000/mailchimp/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.text()
      })
      .then((text) => {
        if (text === "OK") {
          setMessage({
            type: "success",
            description: "Subscribed successfully!",
          })
          setEmail("")
        } else {
          throw new Error("Unexpected response from server")
        }
        setEmail("")
      })
      .catch((e) => {
        console.error(e)
        setMessage({
          type: "error",
          description: "An error occurred",
        })
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <div>
      <form onSubmit={subscribe}>
        <div className="flex">
          <input
            type="email"
            name="email"
            id="email"
            className="border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm w-full px-4"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setMessage(null)
            }}
          />

          <button
            type="submit"
            className="ml-2 bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Subscribe
          </button>
        </div>
      </form>

      {isLoading && (
        <Transition show={isLoading}>
          <Dialog
            onClose={() => setIsLoading(false)}
            className="relative z-[100]"
          >
            <Transition.Child
              enter="ease-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center">
                <Spinner size={24} />
              </div>
            </Transition.Child>
          </Dialog>
        </Transition>
      )}

      {message && (
        <div
          className={`mt-2 text-sm font-medium ${
            message.type === "success" ? "text-green-600" : "text-red-600"
          }`}
        >
          {message.description}
        </div>
      )}
    </div>
  )
}

export default NewsletterForm
