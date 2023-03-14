import React, { memo, useCallback, useMemo, useState } from "react";
import { Game, GameHeader } from "../../models/games";
import { camelCaseToReadable, convertIsoToDate } from "../../utils/tools";

type GamesTableProps = {
  headers: GameHeader[];
  data: Game[];
  onEditGame: (game: Game) => void;
};

const GamesTable = ({ headers, data, onEditGame }: GamesTableProps) => {
  const renderTableValue = useCallback((value: any, header: GameHeader) => {
    if (header === "creationDate") {
      return convertIsoToDate(value);
    } else return value;
  }, []);

  const [sortOrder, setSortOrder] = useState("asc");
  const [sortHeader, setSortHeader] = useState("");

  const toggleSortOrder = useCallback(() => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  }, [sortOrder]);

  const handleHeaderClick = useCallback(
    (header: GameHeader) => {
      setSortHeader(header);
      toggleSortOrder();
    },
    [toggleSortOrder]
  );

  const sortedData = useMemo(
    () =>
      data.sort((a: any, b: any) => {
        if (a[sortHeader] < b[sortHeader]) {
          return sortOrder === "asc" ? -1 : 1;
        }
        if (a[sortHeader] > b[sortHeader]) {
          return sortOrder === "asc" ? 1 : -1;
        }
        return 0;
      }),
    [data, sortHeader, sortOrder]
  );

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {headers.map((header, index) => (
              <th key={index} scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  {camelCaseToReadable(header)}
                  <button onClick={()=> handleHeaderClick(header)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 ml-1"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                    </svg>
                  </button>
                </div>
              </th>
            ))}
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, rowIndex) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              key={rowIndex}
            >
              {headers.map((header, index) => (
                <td
                  key={`${header}_${index}`}
                  className={`px-6 py-4 ${
                    header === "name" ? "font-extrabold text-redCrayola" : ""
                  }`}
                >
                  {renderTableValue(row[header], header)}
                </td>
              ))}
              <td className="px-6 py-4 text-right">
                <button
                  onClick={() => onEditGame(row)}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default memo(GamesTable);
