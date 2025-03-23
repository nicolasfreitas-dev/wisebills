import { create } from "zustand"

type useModal = {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}

export const useModalStore = create<useModal>((set) => ({
    isOpen: false,
    setIsOpen: (isOpen) =>
        set(() => ({
            isOpen: isOpen,
        })),
}));