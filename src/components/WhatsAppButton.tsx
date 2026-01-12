import { client } from "@/lib/sanity";

async function getWhatsAppNumber() {
    const query = `*[_type == "globalSettings"][0].whatsappNumber`;
    return await client.fetch(query);
}

export default async function WhatsAppButton() {
    const number = await getWhatsAppNumber() || "+9779801234567";

    const formattedNumber = number.replace(/[^0-9]/g, "");
    const message = encodeURIComponent("Hello Swift Support, I would like to book a consultation.");
    const waUrl = `https://wa.me/${formattedNumber}?text=${message}`;

    return (
        <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-2xl transition-transform hover:scale-110 animate-whatsapp-pulse"
            aria-label="Contact us on WhatsApp"
        >
            <svg
                viewBox="0 0 24 24"
                className="w-10 h-10 fill-white"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.424 0 12.062c0 2.123.555 4.197 1.611 6.041L0 24l6.117-1.605a11.845 11.845 0 005.932 1.577h.005c6.631 0 12.046-5.424 12.05-12.067a11.822 11.822 0 00-3.526-8.528z" />
            </svg>
        </a>
    );
}
