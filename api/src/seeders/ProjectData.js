const {models, Project} = require('../models/models')

const projects = [
    {
        name: 'Build house',
        description: 'Building your new home is exciting, especially when you understand how the process works.',
        capital: 22400,
        date_start: '2021-11-18',
        date_finish: '2023-10-14',
        statusId: 1
    },
    {
        name: 'Computer Software Development',
        description: 'Software development is the process programmers use to build computer programs. The process, also known as the Software Development Life Cycle (SDLC), includes several phases that provide a method for building products that meet technical specifications and user requirements.',
        capital: 375,
        date_start: '2021-10-21',
        date_finish: '2021-12-03',
        statusId: 4
    },
    {
        name: 'Design of Plans statement',
        description: 'A Design Statement is a document which explains and illustrates the principles and concept behind the design of a proposed development and may be required to be submitted alongside a planning application.',
        capital: 120,
        date_start: '2021-12-10',
        date_finish: '2022-01-17',
        statusId: 1
    },
    {
        name: 'New Product Development',
        description: 'In business and engineering, new product development (NPD) covers the complete process of bringing a new product to market, renewing an existing product or introducing a product in a new market. A central aspect of NPD is product design, along with various business considerations. New product development is described broadly as the transformation of a market opportunity into a product available for sale.The products developed by an organisation provide the means for it to generate income. For many technology-intensive firms their approach is based on exploiting technological innovation in a rapidly changing market. ',
        capital: 745,
        date_start: '2021-09-27',
        date_finish: '2021-12-22',
        statusId: 4
    },
    {
        name: 'Maintenance of Process Industries',
        description: 'Within the process industry, the term maintenance primarily refers to repairs and maintenance directly or indirectly related to the processes involved in the production, e.g. repairs and maintenance of technical installations, pumps, piping, refrigeration installations, compressors, generators etc',
        capital: 1730,
        date_start: '2021-12-01',
        date_finish: '2021-12-25',
        statusId: 1
    },
    {
        name: 'Event or Relocations',
        description: 'Relocation Event means the relocation of the Project, starting at the shutdown of the Project pursuant to such relocation, and ending at the commercial operation of the Project when such relocated Project is reinstalled at a new location, as determined by the Provider in its reasonable discretion.',
        capital: 985,
        date_start: '2021-10-24',
        date_finish: '2021-11-12',
        statusId: 5
    },
    {
        name: 'Equipment or System Installation',
        description: 'Getting ready to have new equipment installed in your plant? Installing new equipment, whether in a brand-new production line or an existing line, can be challenging. To make the process as easy as possible and to save yourself time and money by decreasing the potential for downtime, ask the following questions before any new equipment installation.',
        capital: 725,
        date_start: '2020-01-09',
        date_finish: '2021-02-20',
        statusId: 6
    },
    {
        name: 'Web app development',
        description: 'Web app development empowers web-based projects to perform and act similarly to a mobile app. Web applications engage users, prioritizing responsive interactions, but are still delivered through the internet over a network. ',
        capital: 5740,
        date_start: '2021-11-26',
        date_finish: '2022-03-11',
        statusId: 1
    },
    {
        name: 'Synergy CRM',
        description: 'Customer relationship management (CRM) is a technology for managing all your company’s relationships and interactions with customers and potential customers. The goal is simple: Improve business relationships to grow your business. A CRM system helps companies stay connected to customers, streamline processes, and improve profitability.',
        capital: 80,
        date_start: '2021-10-27',
        date_finish: '2022-01-27',
        statusId: 4

    },
    {
        name: 'The International',
        description: 'The International, often abbreviated as TI, is an annual tournament organized by Valve. In 2015 Valve increased their number of hosted events, founding the Dota Major Championships which incorporates The International into its structure. The International remains the biggest and most prestigious event on the Major Championship circuit.',
        capital: 4500,
        date_start: '2022-10-07',
        date_finish: '2022-10-17',
        statusId: 1
    },
    {
        name: 'Coup de Grace',
        description: 'Phantom Assassin refines her combat abilities, gaining a chance of delivering a devastating critical strike to enemy units. Stifling Dagger shares the same critical strike chance.',
        capital: 11660,
        date_start: '2021-11-30',
        date_finish: '2021-12-12',
        statusId: 1

    },
]

async function addProjects(){
    for(const p in projects){
         Project.create(projects[p])
    }
}

module.exports = addProjects

