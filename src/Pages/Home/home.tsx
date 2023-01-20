import { ArrowsOutCardinal, CircleNotch } from "phosphor-react";
import { useRef, useState } from "react";
import {
  makeMoveable,
  DraggableProps,
  ScalableProps,
  RotatableProps,
  Rotatable,
  Draggable,
  Scalable,
} from "react-moveable";
import MoveableHelper from "moveable-helper";
import Cursor1 from "../../assets/cursor1.svg";
import Cursor2 from "../../assets/cursor2.svg";
import Cursor3 from "../../assets/cursor3.svg";
import Cursor4 from "../../assets/cursor4.svg";
const Moveable = makeMoveable<DraggableProps & ScalableProps & RotatableProps>([
  Draggable,
  Scalable,
  Rotatable,
]);
export default function Home() {
  const [helper] = useState(() => {
    return new MoveableHelper();
  });
  const targetRef = useRef<HTMLButtonElement>(null);
  return (
    <div className="w-screen h-screen grid grid-cols-12">
      <div className="h-screen  col-span-9 flex flex-col items-center justify-center ">
        <div className="w-11/12">
          <div className="mb-9 w-fit">
            <p className="text-3xl font-bold w-fit">Tipos de botão</p>
            <p className="font-light w-2/3">
              Dentro de um layout, botões servem para destacar ações importantes
              a serem tomadas. Acompanhe abaixo um exemplo de tipos e
              propriedades.
            </p>
          </div>
          <table className="uppercase bg-[#0B0911] rounded-lg">
            <tr className="bg-[#1C162C] ">
              <th></th>
              <th className="p-5 font-semibold text-sm">PRIMARY</th>
              <th className="p-5 font-semibold text-sm">SECONDARY</th>
              <th className="p-5 font-semibold text-sm">TERTIARY</th>
              <th className="p-5 font-semibold text-sm">CURSOR</th>
            </tr>
            <tr>
              <th className="bg-[#1C162C]">
                <p className="p-4 font-semibold text-xs">default</p>
              </th>
              <th className="px-8 py-2">
                <button className="transition ease-in-out hover:scale-110 px-6 py-4 rounded-full font-semibold uppercase bg-violet-700 text-xs">
                  default primary
                </button>
              </th>
              <th className="px-8 py-2">
                <button className="transition ease-in-out hover:scale-110 bg-gray-700 active:bg-gray-700 px-6 py-4 rounded-full font-semibold uppercase text-xs">
                  default secundary
                </button>
              </th>
              <th className="px-8 py-2">
                <button className="transition ease-in-out hover:scale-110  active:bg-gray-600 px-6 py-4 rounded-full font-semibold uppercase text-xs">
                  default tertiary
                </button>
              </th>
              <th>
                <button>
                  <img src={Cursor1} alt="img1" />
                </button>
              </th>
            </tr>
            <tr>
              <th className="bg-[#1C162C]">
                <p className="p-5 font-semibold text-xs">hover</p>
              </th>
              <th className="px-8 py-2">
                <button className="transition ease-in-out hover:scale-110  bg-violet-700 hover:bg-violet-600 active:bg-violet-800  px-6 py-4 rounded-full font-semibold uppercase text-xs">
                  hover primary
                </button>
              </th>
              <th>
                <button className="transition ease-in-out hover:scale-110 bg-gray-700 hover:bg-gray-600 active:bg-gray-700 px-6 py-4 rounded-full font-semibold uppercase text-xs">
                  hover secundary
                </button>
              </th>
              <th>
                <button className="transition ease-in-out hover:scale-110 hover:bg-gray-500 active:bg-gray-600 px-6 py-4 rounded-full font-semibold uppercase text-xs">
                  hover tertiary
                </button>
              </th>
              <th>
                <button>
                  <img src={Cursor1} alt="img1" />
                </button>
              </th>
            </tr>
            <tr>
              <th className="bg-[#1C162C]">
                <p className="p-5 font-semibold text-xs">focus</p>
              </th>
              <th className="px-8 py-2">
                <button className="transition ease-in-out hover:scale-110  bg-violet-700 hover:bg-violet-600 active:bg-violet-800  px-6 py-4 rounded-full font-semibold uppercase text-xs outline outline-2 ">
                  focus primary
                </button>
              </th>
              <th>
                <button className="transition ease-in-out hover:scale-110 bg-gray-700 hover:bg-gray-600 active:bg-gray-700 px-6 py-4 rounded-full font-semibold uppercase text-xs outline outline-2">
                  focus secundary
                </button>
              </th>
              <th>
                <button className="transition ease-in-out hover:scale-110 focus:outline-white active:bg-gray-600 px-6 py-4 rounded-full font-semibold uppercase text-xs outline outline-2">
                  focus tertiary
                </button>
              </th>
              <th>
                <button>
                  <img src={Cursor1} alt="img1" />
                </button>
              </th>
            </tr>

            <tr>
              <th className="bg-[#1C162C]">
                <p className="p-5 font-semibold text-xs">disabled</p>
              </th>
              <th className="px-8 py-2">
                <button
                  disabled
                  className="bg-violet-700 opacity-50 text-gray-300 px-6 py-4 rounded-full font-semibold uppercase text-xs cursor-not-allowed"
                >
                  disabled primary
                </button>
              </th>
              <th className="px-8 py-2">
                <button
                  disabled
                  className="opacity-50 bg-gray-700 px-6 py-4 rounded-full font-semibold uppercase text-xs cursor-not-allowed"
                >
                  disabled secundary
                </button>
              </th>
              <th className="px-8 py-2">
                <button
                  disabled
                  className="opacity-50 px-6 py-4 rounded-full font-semibold uppercase text-xs cursor-not-allowed"
                >
                  disabled tertiary
                </button>
              </th>
              <th className="px-8 py-2">
                <button className="cursor-not-allowed">
                  <img src={Cursor2} alt="img1" />
                </button>
              </th>
            </tr>
            <tr>
              <th className="bg-[#1C162C]">
                <p className="p-5 font-semibold text-xs">loading</p>
              </th>
              <th className="px-8 py-2">
                <button className="transition ease-in-out hover:scale-110 flex items-center justify-evenly bg-violet-700 hover:bg-violet-600 active:bg-violet-800  px-6 py-4 rounded-full font-semibold uppercase text-xs cursor-progress">
                  <CircleNotch
                    size={17}
                    className="mr-1 animate-spin"
                    weight="bold"
                  />
                  <p>loading primary</p>
                </button>
              </th>
              <th className="px-6 py-2">
                <button className="transition ease-in-out hover:scale-110 flex items-center justify-evenly bg-gray-700 hover:bg-gray-600 active:bg-gray-700  px-6 py-4 rounded-full font-semibold uppercase text-xs cursor-progress">
                  <CircleNotch
                    size={17}
                    className="mr-1 animate-spin"
                    weight="bold"
                  />
                  <p>loading secundary</p>
                </button>
              </th>
              <th className="px-7 py-2">
                <button className="transition ease-in-out hover:scale-110 flex items-center justify-evenly hover:bg-gray-500 active:bg-gray-600  px-6 py-4 rounded-full font-semibold uppercase text-xs cursor-progress">
                  <CircleNotch
                    size={17}
                    className="mr-1 animate-spin"
                    weight="bold"
                  />
                  <p>loading tertiary</p>
                </button>
              </th>
              <th>
                <button className="cursor-progress">
                  <img src={Cursor3} alt="img1" />
                </button>
              </th>
            </tr>

            <tr>
              <th className="bg-[#1C162C]">
                <p className="p-5 font-semibold text-xs">movable</p>
              </th>
              <th className="px-8 py-2">
                <button
                  ref={targetRef}
                  className="transition ease-in-out hover:scale-110 flex items-center justify-evenly bg-violet-700 hover:bg-violet-600 active:bg-violet-800 px-6 py-4 rounded-full font-semibold uppercase text-xs cursor-move"
                >
                  <ArrowsOutCardinal
                    size={17}
                    className="mr-1 "
                    weight="bold"
                  />
                  <p>movable primary</p>
                </button>
              </th>
              <th className="px-8 py-2">
                <button
                  ref={targetRef}
                  className="transition ease-in-out hover:scale-110 flex items-center justify-evenly bg-gray-700 hover:bg-gray-600 active:bg-gray-700 px-6 py-4 rounded-full font-semibold uppercase text-xs cursor-move"
                >
                  <ArrowsOutCardinal
                    size={17}
                    className="mr-1 "
                    weight="bold"
                  />
                  <p>movable primary</p>
                </button>
              </th>
              <th className="px-6 py-2">
                <button
                  ref={targetRef}
                  className="transition ease-in-out hover:scale-110 flex items-center hover:bg-gray-500 active:bg-gray-600 px-6 py-4 rounded-full font-semibold uppercase text-xs cursor-move"
                >
                  <ArrowsOutCardinal
                    size={17}
                    className="mr-1 "
                    weight="bold"
                  />
                  <p>movable tertiary</p>
                </button>
              </th>
              <th>
                <button className="cursor-move">
                  <img src={Cursor4} alt="img1" />
                </button>
              </th>
            </tr>
          </table>
        </div>
      </div>
      <div className="bg-[#130F1E] h-screen col-span-3">
        <div className="p-10 flex flex-col gap-3">
          <p className="text-3xl font-bold w-fit">Teste os botões</p>
          <p className="font-light">
            Interaja com os botões e observe a mudança de aparência e de
            cursores
          </p>
        </div>
        <div className="p-10 flex flex-col gap-5">
          <button className="w-full transition ease-in-out hover:scale-110  bg-violet-700 hover:bg-violet-600 active:bg-violet-800  px-6 py-4 rounded-full font-semibold uppercase text-xs">
            hover primary
          </button>
          <button
            disabled
            className="w-full opacity-50 bg-gray-700 px-6 py-4 rounded-full font-semibold uppercase text-xs cursor-not-allowed"
          >
            disabled secundary
          </button>
          <button className="transition ease-in-out hover:scale-110 flex items-center justify-evenly hover:bg-gray-500 active:bg-gray-600  px-6 py-4 rounded-full font-semibold uppercase text-xs cursor-progress">
            <CircleNotch
              size={17}
              className="mr-1 animate-spin"
              weight="bold"
            />
            <p>loading tertiary</p>
          </button>
        </div>
        {/* <div className="mb-9 w-fit">
          <p className="text-3xl font-bold w-fit">Tipos de botão</p>
          <p className="font-light w-2/3">
            Dentro de um layout, botões servem para destacar ações importantes a
            serem tomadas. Acompanhe abaixo um exemplo de tipos e propriedades.
          </p>
        </div> */}
      </div>
    </div>
  );
}
