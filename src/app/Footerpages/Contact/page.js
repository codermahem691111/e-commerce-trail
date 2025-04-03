export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Contact Information */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold">CONTACT INFORMATION</h2>
        <p className="mt-2 text-gray-700">
          We love to hear from you on our customer service, merchandise, website, or any topics
          you want to share with us. Your comments and suggestions will be appreciated.
        </p>
        <p className="mt-2 font-semibold">+8809666737475 (10:00 am - 10:00 pm)</p>
        <p className="mt-1 text-red-500">info@shajgoj.com</p>
      </div>

      {/* Shop Addresses */}
      <div>
        <h2 className="text-2xl font-bold mb-4">OUR SHOP ADDRESS:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {shopData.map((shop, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-sm">
              <h3 className="font-bold">{shop.name}</h3>
              <p className="text-gray-700">{shop.address}</p>
              <p className="mt-1 text-sm font-semibold">Contact: {shop.contact}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const shopData = [
  {
    name: "Jamuna Future Park Shop",
    address: "# GA-046, Block-A, Ground Floor",
    contact: "+8801896005914",
  },
  {
    name: "Shimanto Shambhar Shopping Complex Shop",
    address: "# 1048-1054, 1st Floor, Dhanmondi, Dhaka",
    contact: "+8801896005913",
  },
  {
    name: "Uttara Outlet (Padmanagar)",
    address: "# Shop # GB, Ground Floor, 38, Sonargaon Janapath, Sector – 11, Uttara, Dhaka",
    contact: "+8801896005912",
  },
  {
    name: "Baily Road Outlet (Capital Siraj Center)",
    address: "# Shop # 27-28, Ground Floor, Baily Road, Dhaka",
    contact: "+8801896005911",
  },
  {
    name: "Eastern Mollika Shopping Complex",
    address: "# Shop # G64-65, Ground Floor, New Elephant Road, Dhaka",
    contact: "+8801894944377",
  },
  {
    name: "Wari Outlet",
    address: "# 1/1, Ground Floor, Rankin Street, Wari, Dhaka",
    contact: "+8801894944379",
  },
  {
    name: "Chattogram Outlet",
    address: "# Shop #101-102, Ground Floor, Concord Khulshi Town Center, 4 Zakir Hossain Road, Chattogram",
    contact: "+8801896005901",
  },
  {
    name: "Mirpur Outlet",
    address: "Plot-10/C, 1st Floor, Kingsuk Tower, Block ka & kha, Section-6, Mirpur-2, Dhaka",
    contact: "+8801894944376",
  },
];
