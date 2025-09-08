import type { FileData } from "../../../types/ComponentsProps";
import React, { useMemo, useState } from "react";
import TextInput from "../reusable/TextInput";
// import IconButton from "../reusable/IconButton";
// import {
//   FcAlphabeticalSortingAz,
//   FcAlphabeticalSortingZa,
//   FcGenericSortingAsc,
//   FcGenericSortingDesc,
//   FcNumericalSorting12,
//   FcNumericalSorting21,
// } from "react-icons/fc";

type Props = {
  setList: React.Dispatch<React.SetStateAction<FileData[]>>;
  list: FileData[];
  rawList: FileData[];
  setRawList: React.Dispatch<React.SetStateAction<FileData[]>>;
};

const ToolBar: React.FC<Props> = (props) => {
  // const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [selectedValue, setSelectedValue] = useState<string>("name");
  const [flagToReSort, setFlagToReSort] = useState<number>();
  // const [sortDirectionToggle, setSortDirectionToggle] =
  //   useState<boolean>(false);

  const handleSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFlagToReSort(Math.random() * 1000000000000);
    if (!e.target.value) {
      return props.setList([...props.rawList]);
    }
    if (props.rawList.length === 0) {
      return;
    }
    const filteredList = props.rawList.filter((i) =>
      i.name.toLowerCase().includes(e.target.value.toLowerCase().trim()),
    );

    props.setList([...filteredList]);
  };

  useMemo(() => {
    if (!Array.isArray(props.list)) return [];

    const sortedList = [...props.list];
    sortedList.sort((a, b) => {
      if (selectedValue === "name") {
        return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
      }

      if (selectedValue === "createdAt") {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      }

      if (selectedValue === "size") {
        return a.size - b.size;
      }

      return 0; // default (no sort)
    });

    // if (sortDirectionToggle) {
    //   sortedList.reverse();
    // }
    props.setList([...sortedList]);
    return sortedList;
    // }, [sortDirectionToggle, flagToReSort, selectedValue, props.setList]);
  }, [flagToReSort, selectedValue, props.setList]);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // setSelectedIndex(e.target.selectedIndex);
    setSelectedValue(e.target.value);
  };

  // const handleSortDirectionToggle = () => {
  //   setSortDirectionToggle(!sortDirectionToggle);
  // };
  // const SortButtonArray = [
  //   <NameSortButton
  //     handleSortDirectionToggle={handleSortDirectionToggle}
  //     sortDirectionToggle={sortDirectionToggle}
  //   />,
  //   <SizeSortButton
  //     handleSortDirectionToggle={handleSortDirectionToggle}
  //     sortDirectionToggle={sortDirectionToggle}
  //   />,
  //   <DateSortButton
  //     handleSortDirectionToggle={handleSortDirectionToggle}
  //     sortDirectionToggle={sortDirectionToggle}
  //   />,
  // ];
  return (
    <div className="flex w-full items-center justify-between">
      <div className="w-60 md:w-70">
        <TextInput
          parentWidth={true}
          placeHolder="Search by name"
          onChange={handleSearchQuery}
          type="text"
          name="searchQuery"
        />
      </div>
      <div className="flex items-center gap-1 md:gap-3">
        <p className="hidden text-sm font-medium text-gray-400 md:block">
          Sort by :{" "}
        </p>
        <select
          className="w-23 cursor-pointer rounded border-none bg-white p-2 text-sm font-medium text-gray-500 outline-none md:w-auto"
          onChange={handleSelect}
          value={selectedValue}
        >
          <option
            value="name"
            className="cursor-pointer border-none bg-white text-gray-500 outline-none"
          >
            File Name
          </option>
          <option
            value="size"
            className="cursor-pointer border-none bg-white text-gray-500 outline-none"
          >
            File Size
          </option>
          <option
            value="createdAt"
            className="cursor-pointer border-none bg-white text-gray-500 outline-none"
          >
            Date Created
          </option>
        </select>
        {/* {SortButtonArray[selectedIndex]} */}
      </div>
    </div>
  );
};

// type DateSortButtonProps = {
//   sortDirectionToggle: boolean;
//   handleSortDirectionToggle: () => void;
// };

// const DateSortButton: React.FC<DateSortButtonProps> = (props) => {
//   return (
//     <div className="flex items-center justify-center">
//       {props.sortDirectionToggle ? (
//         <IconButton
//           icon={FcNumericalSorting12}
//           iconColor="text-gray-500"
//           onClick={props.handleSortDirectionToggle}
//         />
//       ) : (
//         <IconButton
//           icon={FcNumericalSorting21}
//           iconColor="text-gray-500"
//           onClick={props.handleSortDirectionToggle}
//         />
//       )}
//     </div>
//   );
// };

// type NameSortButtonProps = {
//   sortDirectionToggle: boolean;
//   handleSortDirectionToggle: () => void;
// };

// const NameSortButton: React.FC<NameSortButtonProps> = (props) => {
//   return (
//     <div className="flex items-center justify-center">
//       {!props.sortDirectionToggle ? (
//         <IconButton
//           icon={FcAlphabeticalSortingAz}
//           iconColor="text-gray-500"
//           onClick={props.handleSortDirectionToggle}
//         />
//       ) : (
//         <IconButton
//           icon={FcAlphabeticalSortingZa}
//           iconColor="text-gray-500"
//           onClick={props.handleSortDirectionToggle}
//         />
//       )}
//     </div>
//   );
// };

// type SizeSortButtonProps = {
//   sortDirectionToggle: boolean;
//   handleSortDirectionToggle: () => void;
// };

// const SizeSortButton: React.FC<SizeSortButtonProps> = (props) => {
//   return (
//     <div className="flex items-center justify-center">
//       {!props.sortDirectionToggle ? (
//         <IconButton
//           icon={FcGenericSortingAsc}
//           iconColor="text-gray-500"
//           onClick={props.handleSortDirectionToggle}
//         />
//       ) : (
//         <IconButton
//           icon={FcGenericSortingDesc}
//           iconColor="text-gray-500"
//           onClick={props.handleSortDirectionToggle}
//         />
//       )}
//     </div>
//   );
// };
export default ToolBar;
