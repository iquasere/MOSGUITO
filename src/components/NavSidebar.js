/* eslint-disable react/display-name, jsx-a11y/click-events-have-key-events */
import { Navigation } from "react-minimal-side-navigation";
import { useHistory, useLocation } from "react-router-dom";
import Icon from "awesome-react-icons";
import React, {useState} from "react";
import { FaChartPie } from 'react-icons/fa';
import { ResultsDisposition } from '../pages/results'
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";


export const NavSidebar = () => {
  const history = useHistory();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          onClick={handleSidebarToggle}
          className={`fixed inset-0 z-20 block transition-opacity bg-black opacity-50 lg:hidden`}
        />
      )}
      <div>
        <button
          className="btn-menu"
          onClick={handleSidebarToggle}
          type="button"
        >
          <Icon name="burger" className="w-6 h-6" />
        </button>
      </div>
      {/* Sidebar */}
      {isSidebarOpen && (
      <div>
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
                  title: "The MOSCA project",
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
                  title: "Experiments",
                  itemId: "/MOSGUITO/experiments"
                }
              ]
            }
          ]}
        />

        {ResultsDisposition ? (
          <div>
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
                    },
                    {
                      title: 'Annotation Results',
                      itemId: '/MOSGUITO/annotation-results'
                    },
                    {
                      title: 'Differential Analysis',
                      itemId: '/MOSGUITO/differential-analysis'
                    },
                    {
                      title: 'KEGGmaps',
                      itemId: '/MOSGUITO/keggmaps-results'
                    },
                    {
                      title: 'EntryReports',
                      itemId: '/MOSGUITO/entry-reports'
                    },
                    {
                      title: 'GeneralReports',
                      itemId: '/MOSGUITO/general-reports'
                    },
                    {
                      title: 'ProteinReports',
                      itemId: '/MOSGUITO/protein-reports'
                    }
                  ]
                }
              ]}
              onSelect={({ itemId }) => {
                history.push(itemId);
              }}
            />
          </div>
        ) : (
          <div>
            <Navigation
              activeItemId={location.pathname}
              items={[
                {
                  title: "Results",
                  itemId: "/MOSGUITO/results",
                  elemBefore: () => <FaChartPie />
                }
              ]}
              onSelect={({ itemId }) => {
                history.push(itemId);
              }}
            />
          </div>
        )}
      </div>
      )}
    </>
  );
}
