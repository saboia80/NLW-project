import * as dialog from "@radix-ui/react-dialog";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { X } from "lucide-react";


interface NotecardProps {
  note: {
    id: string;
    date: Date;
    content: string;
  };
  onNoteDelete: (id:string)=> void
}

export function Notecard({note, onNoteDelete}: NotecardProps,) {
  return (
    <dialog.Root>
      <dialog.Trigger className="rounded-md text-left flex flex-col bg-slate-800 p-5 gap-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
        <span className="text-sm font-medium text-slate-300">
         {formatDistanceToNow(note.date, {locale: ptBR, addSuffix: true })}
        </span>
        <p className="text-sm leading-6 text-slate-400">{note.content}</p>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
      </dialog.Trigger>

      <dialog.Portal>
        <dialog.Overlay className="inset-0 fixed bg-black/50" />
        <dialog.Content className="fixed overflow-hindden inset-0 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[640px] w-full md:h-[60vh] bg-slate-700 md:rounded-md flex flex-col outline-none ">
        <dialog.Close className="absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100">
          <X className="size-5"/>
        </dialog.Close>
          <div className="flex flex-1 flex-col gap-3 p-5">
            <span className="text-sm font-medium text-slate-300">
              {formatDistanceToNow(note.date, {locale: ptBR, addSuffix: true })}
            </span>
            <p className="text-sm leading-6 text-slate-400">
              {note.content}
            </p>
          </div>
          <button type="button" onClick={() => onNoteDelete(note.id)} className="w-full bg-slate-800 py-4 text-center text-small text-slate-300 font-medium group">Deseja <span className="text-red-400 group-hover:underline">apagar essa nota?</span></button>
        </dialog.Content>
      </dialog.Portal>
    </dialog.Root>
  );
}