export default function Datatableui() {
  return (
    <>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <caption class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Evaluation Results
          </caption>
          <thead class="text-xs text-gray-700 uppercase bg-lightgrey dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Target LLM
              </th>
              <th scope="col" class="px-6 py-3">
                Dataset
              </th>
              <th scope="col" class="px-6 py-3">
                BLEU
              </th>
              <th scope="col" class="px-6 py-3">
                MMLU
              </th>
              <th scope="col" class="px-6 py-3">
                ROUGE
              </th>
              <th scope="col" class="px-6 py-3">
                LLM
              </th>
              <th scope="col" class="px-6 py-3">
                Judge
              </th>
              <th scope="col" class="px-6 py-3">
                TN
              </th>
              <th scope="col" class="px-6 py-3">
                VDB
              </th>
              <th scope="col" class="px-6 py-3">
                TK
              </th>
              <th scope="col" class="px-6 py-3">
                TP
              </th>
              <th scope="col" class="px-6 py-3">
                MT
              </th>
              <th scope="col" class="px-6 py-3">
                FP
              </th>
              <th scope="col" class="px-6 py-3">
                PP
              </th>
              <th scope="col" class="px-6 py-3">
                System prompt
              </th>
              <th scope="col" class="px-6 py-3">
                Details
              </th>
              <th scope="col" class="px-6 py-3">
                Cost
              </th>
              <th scope="col" class="px-6 py-3">
                DT
              </th>
              <th scope="col" class="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b border-lightgrey dark:bg-gray-800 dark:border-lightgrey">
              <th
                scope="row"
                class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple
              </th>
              <td class="px-6 py-4">Silver</td>
              <td class="px-6 py-4">Laptop</td>
              <td class="px-6 py-4">$2999</td>
            </tr>
            <tr class="bg-white border-b border-lightgrey dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Microsoft Surface Pro
              </th>
              <td class="px-6 py-4">White</td>
              <td class="px-6 py-4">Laptop PC</td>
              <td class="px-6 py-4">$1999</td>
            </tr>
            <tr class="bg-white border-b border-lightgrey dark:bg-gray-800">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Magic Mouse 2
              </th>
              <td class="px-6 py-4">Black</td>
              <td class="px-6 py-4">Accessories</td>
              <td class="px-6 py-4">$99</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
