import { create } from "zustand"

type useModal = {
    openDialog: boolean
    setOpenDialog: (isOpen: boolean) => void
}

export const useModalStore = create<useModal>((set) => ({
    openDialog: false,
    setOpenDialog: (isOpen) =>
        set(() => ({
            openDialog: isOpen,
        })),
}));