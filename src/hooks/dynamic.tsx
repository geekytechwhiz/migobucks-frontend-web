import React, { useState, useEffect, useCallback } from "react";
import Dropdown, { IDropdownOptionData } from "../components/dropdown";

export type DataType = "list" | "text" | "number";
export interface IListData {
  name: string;
  value: string | number;
}

export type IData =
  | {
      dataType: "list";
      displayName: string;
      fieldName: string;
      filedPosition: number;
      data: IListData[];
    }
  | {
      dataType: "text";
      displayName: string;
      fieldName: string;
      filedPosition: number;
    }
  | {
      dataType: "number";
      displayName: string;
      fieldName: string;
      filedPosition: number;
    }
  | {
      dataType: "option";
      displayName: string;
      fieldName: string;
      filedPosition: number;
    };

export interface IUseComponentTreeProps {
  data: IData[];
}

export const useDynamic = (
  props: IUseComponentTreeProps
): JSX.Element[] | undefined => {
  const { data } = props;
  const [component, setComponent] = useState<JSX.Element[]>();

  useEffect(() => {
    const tree = data.map((el) => {
      switch (el.dataType) {
        case "list":
          const option: IDropdownOptionData[] = el.data.map(
            ({ name: label, value }) => ({ label, value })
          );
          return (
            <div>
              <label>{el.displayName}</label>
              <Dropdown name={el.fieldName} options={option} />
            </div>
          );
        case "number":
          return (
            <div>
              <label>{el.displayName}</label>
              <input type="number" name={el.fieldName} />
            </div>
          );
        case "text":
          return (
            <div>
              <label>{el.displayName}</label>
              <input type="text" name={el.fieldName} />
            </div>
          );
        case "option":
          return (
            <div>
              <label>{el.displayName}</label>
              <input type="text" name={el.fieldName} />
            </div>
          );
      }
    });

    setComponent(tree);
  }, [data]);

  return component;
};
