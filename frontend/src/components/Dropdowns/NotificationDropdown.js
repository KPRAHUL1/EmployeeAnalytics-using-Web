import React from "react";
import { createPopper } from "@popperjs/core";

const NotificationDropdown = () => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();

  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };

  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  return (
    <>
      <button
        className="text-blueGray-500 block py-1 px-3 focus:outline-none"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <i className="fas fa-bell"></i>
      </button>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 min-w-48"
        }
      >
        <span
          className="text-sm font-semibold block w-full whitespace-nowrap bg-transparent text-blueGray-700 py-2 px-4"
        >
          Notifications
        </span>
        <a
          href="#new-message"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          onClick={(e) => e.preventDefault()}
        >
          📩 New message from John
        </a>
        <a
          href="#task-completed"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          onClick={(e) => e.preventDefault()}
        >
          ✅ Task "Project Review" completed
        </a>
        <a
          href="#server-alert"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          onClick={(e) => e.preventDefault()}
        >
          ⚠️ Server downtime alert
        </a>
        <div className="h-0 my-2 border border-solid border-blueGray-100" />
        <a
          href="#view-all"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          onClick={(e) => e.preventDefault()}
        >
          View all notifications
        </a>
      </div>
    </>
  );
};

export default NotificationDropdown;
