import { lists } from "../support/mocks/lists";

const bookMock = {
  title: "Book used for testing",
  authors: ["Test Author"],
  publisher: "Test Publisher",
  published_date: "2024",
  description: "Test description",
  industry_identifiers: [{ type: "ISBN_13", identifier: "1234567890123" }],
  reading_modes: { text: true, image: true },
  page_count: 200,
  print_type: "BOOK",
  categories: ["Fiction"],
  average_rating: 4.5,
  ratings_count: 100,
  maturity_rating: "NOT_MATURE",
  allow_anon_logging: true,
  content_version: "1.0.0",
  panelization_summary: {
    contains_epub_bubbles: false,
    contains_image_bubbles: false,
  },
  image_links: {
    small_thumbnail: "https://test.com/small.jpg",
    thumbnail: "https://test.com/thumb.jpg",
  },
  language: "en",
  preview_link: "https://test.com/preview",
  info_link: "https://test.com/info",
  canonical_volume_link: "https://test.com/volume",
};

const mockWebSocketMessages = [
  {
    identifier: JSON.stringify({ channel: "SearchChannel" }),
    type: "confirm_subscription",
  },
  {
    identifier: JSON.stringify({ channel: "SearchChannel" }),
    message: {
      message: {
        data: [
          {
            title: "Evelyn Waugh",
            authors: ["Frances Donaldson"],
            published_date: "2011-09-28",
            page_count: 111,
          },
          {
            title: "The Diary of John Evelyn",
            authors: ["John Evelyn"],
            published_date: "2023-11-21",
          },
          {
            title: "The Diaries of Evelyn Waugh",
            authors: ["Evelyn Waugh"],
            published_date: "1976",
          },
        ],
      },
    },
  },
];

const mockAddBookResponse = {
  id: "6e2875b7-dcec-4e63-b586-6dc071aba2c6",
  name: "Fiction",
  user_id: 100,
  created_at: "2025-04-23T20:12:35.104Z",
  updated_at: "2025-04-23T20:12:35.104Z",
  books: [
    {
      id: "6c69a78c-0b5e-4ccc-bdff-f98e35df75e0",
      title: "The Great Gatsby",
      authors: ["F. Scott Fitzgerald"],
      isbn: "9780743273565",
      page_count: 234,
      cover_image:
        "http://books.google.com/books/content?id=8drgDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      created_at: "2025-04-23T20:10:35.443Z",
      updated_at: "2025-04-23T20:10:35.443Z",
    },
  ],
};

let ws;

describe("Add Book", () => {
  beforeEach(() => {
    cy.setCookie("userId", "100");
    //   // Mock the lists API
    cy.intercept("GET", "**/lists", {
      statusCode: 200,
      body: lists,
    }).as("getLists");

    cy.window().then((win) => {
      console.log("WebSocket before mocking:", win.WebSocket);
    });

    // cy.intercept("POST", "**/books/search").as("searchBooks");

    // // Mock the search API to return results directly
    // cy.intercept("POST", "**/add_book", {
    //   statusCode: 200,
    //   body: {
    //     ...mockAddBookResponse,
    //   },
    // }).as("addBook");

    // Mock the WebSocket connection
    cy.mockWebSocket("ws://localhost:3001/cable", {
      webSocketCtorName: "MockedWebSocket", // Use a custom WebSocket constructor name
      connectionResponseMessage: mockWebSocketMessages[0], // Send subscription confirmation on connection
    })
      .registerSocketRequestResponse(
        {
          command: "subscribe",
          identifier: JSON.stringify({ channel: "SearchChannel" }),
        },
        mockWebSocketMessages[1], // Send search results after subscription
      )
      .then((mockedWs) => {
        ws = mockedWs; // Store the mocked WebSocket instance
      });

    //   // Visit the add book page
    cy.visit("/finished/add-book");
  });

  it("add a book to a list", () => {
    cy.intercept("POST", "**/books/search").as("searchBooks");
    cy.log("Starting search input");
    cy.get('[data-testid="search-by-input"]').type("Test Book");

    cy.log("Waiting for search API");
    cy.wait("@searchBooks").then((interception) => {
      cy.log("Search response received");
      assert.isNotEmpty(interception.response.body);
    });

    cy.get("[data-testid='dropdown-element-0']", { timeout: 20000 })
      .should("be.visible")
      .then(() => {
        cy.log("Dropdown is visible");
      });

    cy.get('[data-testid="dropdown-element-0"]', { timeout: 20000 })
      .click({
        force: true,
      })
      .then(() => {
        cy.log("Clicked on dropdown");
      });
    cy.get("[data-testid='confirmation-modal']").should("exist");
    cy.get("[data-testid='confirmation-modal-accept-button']").click();
    cy.intercept("POST", "**/add_book", {
      statusCode: 200,
      body: {
        ...mockAddBookResponse,
      },
    }).as("addBook");
    cy.wait("@addBook").its("response.statusCode").should("eq", 200);
    cy.get("[data-testid='confirmation-modal']").should("not.exist");
  });
});
