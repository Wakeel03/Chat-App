import { ChatAttachment } from "./ChatAttachment"
import { ChatInput } from "./ChatInput"
import { ChatMessage } from "./ChatMessage"
import { ChatSendButton } from "./ChatSendButton"

export const ChatView = () => {
  return (
    <div className="flex flex-col flex-auto h-full p-6">
        <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
            <div className="flex flex-col h-full overflow-x-auto mb-4">
                <div className="flex flex-col h-full">
                    <div className="grid grid-cols-12 gap-y-2">
                        {/* Chat Messages */}
                        <ChatMessage />
                    </div>
                </div>
            </div>

            
            {/* Send Message */}
            <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
                <ChatAttachment />

                <div className="flex-grow ml-4">
                    <ChatInput />
                </div>

                <div className="ml-4">
                   <ChatSendButton /> 
                </div>
            </div>
        </div>
    </div>
  )
}
