/* eslint-disable react/display-name, jsx-a11y/click-events-have-key-events */
import { Navigation } from "react-minimal-side-navigation";
import { useHistory, useLocation } from "react-router-dom";
import Icon from "awesome-react-icons";
import React, { useState } from "react";
import { FaChartPie } from 'react-icons/fa';

import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

export const NavSidebar = () => {
  const history = useHistory();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <React.Fragment>
      {/* Sidebar Overlay */}
      <div
        onClick={() => setIsSidebarOpen(false)}
        className={`fixed inset-0 z-20 block transition-opacity bg-black opacity-50 lg:hidden ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      />

      <div>
        <button
          className="btn-menu"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          type="button"
        >
          <Icon name="burger" className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-white border-r-2 lg:translate-x-0 lg:static lg:inset-0 ${
          isSidebarOpen ? "ease-out -translate-x-0" : "ease-in -translate-x-full"
        }`}
      >

        <Navigation
          activeItemId={location.pathname}
          onSelect={({ itemId }) => {
            history.push(itemId);
          }}
          items={[
            {
              title: "Home",
              itemId: "/MOSGUITO/home",
              elemBefore: () => <Icon name="coffee" />
            },
            {
              title: "About",
              itemId: "/MOSGUITO/about",
              elemBefore: () => <Icon name="user" />,
              subNav: [
                {
                  title: "Project",
                  itemId: "/MOSGUITO/project"
                },
                {
                  title: "Members",
                  itemId: "/MOSGUITO/members"
                }
              ]
            },
            {
              title: "Configuration",
              itemId: "/MOSGUITO/config",
              elemBefore: () => <Icon name="settings" />,
              subNav: [
                {
                  title: "General configuration",
                  itemId: "/MOSGUITO/general-configuration"
                },
                {
                  title: "Experiments",
                  itemId: "/MOSGUITO/experiments"
                },
                {
                  title: "UniProt columns",
                  itemId: "/MOSGUITO/uniprot-columns"
                },
                {
                  title: "UniProt databases",
                  itemId: "/MOSGUITO/uniprot-databases"
                },
                {
                  title: "KEGG metabolic maps",
                  itemId: "/MOSGUITO/keggmaps"
                },
                {
                  title: "Proteomics configuration",
                  itemId: "/MOSGUITO/proteomics-configuration"
                }
              ]
            }
          ]}
        />

        <div className="absolute bottom-0 w-full my-8">
          <Navigation
            activeItemId={location.pathname}
            items={[
              {
                title: "Results",
                itemId: "/MOSGUITO/results",
                elemBefore: () => <FaChartPie />,
                subNav: [
                {
                  title: "Load results",
                  itemId: "/MOSGUITO/load-results"
                },
                {
                  title: "FastQC reports",
                  itemId: "/MOSGUITO/fastqc-reports"
                },
                {
                  title: "Assembly QC",
                  itemId: "/MOSGUITO/assembly-qc"
                }
              ]
              }
            ]}
            onSelect={({ itemId }) => {
              history.push(itemId);
            }}
          />
        </div>
      </div>
    </React.Fragment>
  );
};
