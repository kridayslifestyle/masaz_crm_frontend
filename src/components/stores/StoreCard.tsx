"use client";

import { useState } from "react";

import {
  MapPin,
  Phone,
  Mail,
  Store as StoreIcon,
  Eye,
  EyeOff,
  Building2,
  CreditCard,
  Receipt,
  UserRound,
} from "lucide-react";

import {
  Store,
  StoreCredentials,
} from "@/types/store";

import {
  deactivateStore,
  activateStore,
  getStoreCredentials,
} from "@/services/stores";

interface Props {
  store: Store;
  setSelectedStore: any;
  setShowModal: any;
}

export default function StoreCard({
  store,
  setSelectedStore,
  setShowModal,
}: Props) {
  const [showDetails, setShowDetails] =
    useState(false);

  const [credentials, setCredentials] =
    useState<StoreCredentials | null>(null);

  const [showPassword, setShowPassword] =
    useState(false);

  const [loadingCredentials, setLoadingCredentials] =
    useState(false);

  const [credentialError, setCredentialError] =
    useState("");

  const formatCurrency = (
    value?: number | null
  ) => {
    if (value === null || value === undefined) {
      return "—";
    }

    return `₹${value.toLocaleString("en-IN")}`;
  };

  const formatDate = (
    value?: string | null
  ) => {
    if (!value) {
      return "—";
    }

    return new Date(value).toLocaleDateString(
      "en-IN"
    );
  };

  const displayValue = (
    value?: string | null
  ) => {
    return value || "—";
  };

  const handleViewCredentials = async () => {
    /*
     * If already loaded, simply toggle
     * password visibility.
     */
    if (credentials) {
      setShowPassword((prev) => !prev);
      return;
    }

    try {
      setLoadingCredentials(true);
      setCredentialError("");

      const data =
        await getStoreCredentials(store.id);

      setCredentials(data);
      setShowPassword(true);
    } catch (error) {
      console.error(
        "Failed to load credentials:",
        error
      );

      setCredentialError(
        "Unable to load credentials."
      );
    } finally {
      setLoadingCredentials(false);
    }
  };

  const handleToggleDetails = () => {
    setShowDetails((prev) => !prev);

    /*
     * Hide decrypted password whenever
     * store details are closed.
     */
    if (showDetails) {
      setShowPassword(false);
    }
  };

  const handleStatusChange = async () => {
    const action = store.is_active
      ? "Deactivate"
      : "Activate";

    const confirmed = window.confirm(
      `${action} this store?`
    );

    if (!confirmed) {
      return;
    }

    try {
      if (store.is_active) {
        await deactivateStore(store.id);
      } else {
        await activateStore(store.id);
      }

      window.location.reload();
    } catch (error) {
      console.error(
        "Failed to change store status:",
        error
      );

      alert(
        `Failed to ${action.toLowerCase()} store`
      );
    }
  };

  return (
    <div
      className="
        bg-white
        rounded-3xl
        shadow-sm
        p-6
        hover:shadow-lg
        transition
      "
    >
      {/* Header */}

      <div className="flex justify-between gap-4">
        <div className="flex gap-4">
          <div
            className="
              h-14
              w-14
              rounded-full
              bg-teal-500
              flex
              items-center
              justify-center
              shrink-0
            "
          >
            <StoreIcon
              className="text-white"
              size={26}
            />
          </div>

          <div>
            <h2 className="font-bold text-2xl">
              {store.name}
            </h2>

            <p className="text-gray-500">
              {store.owner_name}
            </p>
          </div>
        </div>

        <span
          className={`
            px-4
            py-1
            rounded-full
            h-fit
            text-sm
            font-medium
            ${
              store.is_active
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
            }
          `}
        >
          {store.is_active
            ? "Active"
            : "Inactive"}
        </span>
      </div>

      {/* Contact */}

      <div className="space-y-3 mt-6">
        <div className="flex gap-3 text-gray-600">
          <MapPin
            size={18}
            className="shrink-0"
          />

          <span>
            {displayValue(store.city)}
          </span>
        </div>

        <div className="flex gap-3 text-gray-600">
          <Phone
            size={18}
            className="shrink-0"
          />

          <span>
            {displayValue(
              store.owner_phone
            )}
          </span>
        </div>

        <div className="flex gap-3 text-gray-600">
          <Mail
            size={18}
            className="shrink-0"
          />

          <span className="break-all">
            {displayValue(
              store.owner_email
            )}
          </span>
        </div>
      </div>

      {/* Stats */}

      <div
        className="
          bg-slate-50
          rounded-2xl
          p-5
          mt-6
          grid
          grid-cols-3
          gap-3
        "
      >
        <div>
          <p className="text-gray-500 text-sm">
            CHAIRS
          </p>

          <h3 className="font-bold text-2xl">
            {store.total_chairs ?? 0}
          </h3>
        </div>

        <div>
          <p className="text-gray-500 text-sm">
            SHARE
          </p>

          <h3 className="font-bold text-2xl">
            {store.share_percentage !==
            undefined
              ? `${store.share_percentage}%`
              : "—"}
          </h3>
        </div>

        <div>
          <p className="text-gray-500 text-sm">
            REVENUE
          </p>

          <h3
            className="
              font-bold
              text-2xl
              text-green-500
            "
          >
            {formatCurrency(
              store.monthly_revenue
            )}
          </h3>
        </div>
      </div>

      {/* Pending Payment */}

      {store.pending_amount !== undefined &&
        store.pending_amount !== null && (
          <div
            className="
              bg-yellow-50
              border
              border-yellow-200
              rounded-2xl
              p-4
              mt-6
              flex
              justify-between
              gap-4
            "
          >
            <span>
              Pending payment
            </span>

            <span
              className="
                bg-yellow-400
                px-4
                rounded-full
                font-semibold
              "
            >
              {formatCurrency(
                store.pending_amount
              )}
            </span>
          </div>
        )}

      {/* Expanded Details */}

      {showDetails && (
        <div
          className="
            mt-6
            border-t
            pt-6
            space-y-6
          "
        >
          {/* Store Details */}

          <div>
            <div className="flex items-center gap-2 mb-4">
              <StoreIcon size={19} />

              <h3 className="font-bold">
                Store Details
              </h3>
            </div>

            <div
              className="
                bg-slate-50
                rounded-2xl
                p-4
                space-y-3
                text-sm
              "
            >
              <DetailRow
                label="Store Type"
                value={
                  store.store_type || "—"
                }
              />

              <DetailRow
                label="GST Number"
                value={displayValue(
                  store.gst_number
                )}
              />

              <DetailRow
                label="Address"
                value={displayValue(
                  store.address
                )}
              />

              <DetailRow
                label="Agreement Start"
                value={formatDate(
                  store.agreement_start_date
                )}
              />

              <DetailRow
                label="Agreement End"
                value={formatDate(
                  store.agreement_end_date
                )}
              />

              <DetailRow
                label="Revenue Share Type"
                value={displayValue(
                  store.revenue_share_type
                )}
              />
            </div>
          </div>

          {/* Bank Details */}

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 size={19} />

              <h3 className="font-bold">
                Bank Details
              </h3>
            </div>

            <div
              className="
                bg-slate-50
                rounded-2xl
                p-4
                space-y-3
                text-sm
              "
            >
              <DetailRow
                label="Account Holder"
                value={displayValue(
                  store.account_holder_name
                )}
              />

              <DetailRow
                label="Bank"
                value={displayValue(
                  store.bank_name
                )}
              />

              <DetailRow
                label="Account Number"
                value={displayValue(
                  store.account_number
                )}
              />

              <DetailRow
                label="IFSC"
                value={displayValue(
                  store.ifsc_code
                )}
              />
            </div>
          </div>

          {/* Payment Details */}

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Receipt size={19} />

              <h3 className="font-bold">
                Payment Details
              </h3>
            </div>

            <div
              className="
                bg-slate-50
                rounded-2xl
                p-4
                space-y-3
                text-sm
              "
            >
              <DetailRow
                label="Invoice"
                value={displayValue(
                  store.payment_invoice
                )}
              />

              <DetailRow
                label="Payment Date"
                value={formatDate(
                  store.payment_date
                )}
              />
            </div>
          </div>

          {/* Credentials */}

          <div>
            <div className="flex items-center gap-2 mb-4">
              <UserRound size={19} />

              <h3 className="font-bold">
                Store Login
              </h3>
            </div>

            <div
              className="
                bg-slate-50
                rounded-2xl
                p-4
                space-y-4
              "
            >
              <DetailRow
                label="Username"
                value={
                  credentials
                    ?.store_username ||
                  store.store_username ||
                  "—"
                }
              />

              <div className="flex justify-between gap-4">
                <span className="text-gray-500 text-sm">
                  Password
                </span>

                <div className="text-right">
                  {showPassword &&
                  credentials ? (
                    <span className="font-medium break-all">
                      {credentials.store_password ||
                        "—"}
                    </span>
                  ) : (
                    <span className="font-medium">
                      ••••••••
                    </span>
                  )}
                </div>
              </div>

              {credentialError && (
                <p className="text-red-500 text-sm">
                  {credentialError}
                </p>
              )}

              <button
                type="button"
                onClick={
                  handleViewCredentials
                }
                disabled={
                  loadingCredentials
                }
                className="
                  w-full
                  border
                  rounded-xl
                  py-2.5
                  flex
                  items-center
                  justify-center
                  gap-2
                  hover:bg-white
                  disabled:opacity-50
                "
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}

                {loadingCredentials
                  ? "Loading..."
                  : showPassword
                    ? "Hide Password"
                    : "View Password"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Buttons */}

      <div
        className="
          grid
          grid-cols-3
          gap-3
          mt-6
        "
      >
        <button
          onClick={() => {
            setSelectedStore(store);
            setShowModal(true);
          }}
          className="
            bg-blue-600
            text-white
            rounded-xl
            py-3
          "
        >
          Edit
        </button>

        <button
          onClick={handleToggleDetails}
          className="
            bg-slate-200
            rounded-xl
            py-3
          "
        >
          {showDetails
            ? "Hide"
            : "View"}
        </button>

        <button
          onClick={handleStatusChange}
          className={`
            ${
              store.is_active
                ? "bg-red-500 text-white"
                : "bg-green-500 text-white"
            }
            rounded-xl
            py-3
          `}
        >
          {store.is_active
            ? "Deactivate"
            : "Activate"}
        </button>
      </div>
    </div>
  );
}

function DetailRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex justify-between gap-4">
      <span className="text-gray-500">
        {label}
      </span>

      <span
        className="
          font-medium
          text-right
          break-all
        "
      >
        {value}
      </span>
    </div>
  );
}