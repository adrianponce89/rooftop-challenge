const UNORDERED = [
  "YxB9L5ezC6ZEUPQD1TZ6oQGI4laWqkdDdxtd7jENIy8LILnEvlhrjH0KJzpWbvXHVnHSZ38JvhpAYA0C3LzvFnq7YiO9UzWtv1hc",
  "19P24h73qs5pjTwfxTN87s5vhiqzVlktIhCUg9enJDQGqj7IXBZGvK5VdB1r8Y6Y1zHgN0gbcfSjilF5O4JDjxBz0H91plnSiO5d",
  "WRyp2VBBcqtImuNuRrW5G88Ayrmu3mTB1YEsdL72aO6X8Kku2vkeEtngCe5sTRUma8rjXpk71qdFJTHeJMsEurLhwCMVWEEet1FJ",
  "tQBy49AMU6qy9660mayd8W0U4gMwVxPe427TMEmq2xvpTd9VQ52pFJ5rAHTQffwVhimjGy7BxsVhGgNuimmC2CMOFEzTLndDlrhC",
  "Km8cwKNkB4z7GYifMxa8cyN8ZZ3mYhXPTQ2Hk3ps2WRijzvGYYzcLuKHfJuhYciLM9SyrX7yurldSnWnCQSDt97nwr05PTPlWQEQ",
  "n2rHCY0FPAKfLWNXbUT4CmbSEf2MRSo5MQB47LimUaWC1j0o0fqzo7MtxnuYTEQ5WnHrE8xDFxFbVRFraRdKxOyuARwY5Og0WoP8",
  "wF2gyEDTFuotYZmtPZeDnrDtGYDoWcPenUScqbRLG7BKmsQZMTh12V9DkTUs5mcoMSB8bgrKMm29eGCqFivwEeytbffuDpucvfcV",
  "ZdC5SEl1GxhainbOoxLIscfH9pXENaglff5hn4hivmC3WoQdGSsjfI2ZEwncpuHZvs0FF0xQbDHZLgepVGHMCd6r51w0YBCZ1nQp",
  "mrCCLC96HP3UmdlGXKeEbF6E8MwGZAThe247H0T30rditux1KX5Pp0MRnfVNhznT1N3Z3c7MKXRGzJubBXYSsB4pcWWY6SGxRwTo",
];

const ORDERED = [
  "YxB9L5ezC6ZEUPQD1TZ6oQGI4laWqkdDdxtd7jENIy8LILnEvlhrjH0KJzpWbvXHVnHSZ38JvhpAYA0C3LzvFnq7YiO9UzWtv1hc",
  "mrCCLC96HP3UmdlGXKeEbF6E8MwGZAThe247H0T30rditux1KX5Pp0MRnfVNhznT1N3Z3c7MKXRGzJubBXYSsB4pcWWY6SGxRwTo",
  "WRyp2VBBcqtImuNuRrW5G88Ayrmu3mTB1YEsdL72aO6X8Kku2vkeEtngCe5sTRUma8rjXpk71qdFJTHeJMsEurLhwCMVWEEet1FJ",
  "n2rHCY0FPAKfLWNXbUT4CmbSEf2MRSo5MQB47LimUaWC1j0o0fqzo7MtxnuYTEQ5WnHrE8xDFxFbVRFraRdKxOyuARwY5Og0WoP8",
  "Km8cwKNkB4z7GYifMxa8cyN8ZZ3mYhXPTQ2Hk3ps2WRijzvGYYzcLuKHfJuhYciLM9SyrX7yurldSnWnCQSDt97nwr05PTPlWQEQ",
  "wF2gyEDTFuotYZmtPZeDnrDtGYDoWcPenUScqbRLG7BKmsQZMTh12V9DkTUs5mcoMSB8bgrKMm29eGCqFivwEeytbffuDpucvfcV",
  "ZdC5SEl1GxhainbOoxLIscfH9pXENaglff5hn4hivmC3WoQdGSsjfI2ZEwncpuHZvs0FF0xQbDHZLgepVGHMCd6r51w0YBCZ1nQp",
  "tQBy49AMU6qy9660mayd8W0U4gMwVxPe427TMEmq2xvpTd9VQ52pFJ5rAHTQffwVhimjGy7BxsVhGgNuimmC2CMOFEzTLndDlrhC",
  "19P24h73qs5pjTwfxTN87s5vhiqzVlktIhCUg9enJDQGqj7IXBZGvK5VdB1r8Y6Y1zHgN0gbcfSjilF5O4JDjxBz0H91plnSiO5d",
];

class BlocksServiceMockup {
  constructor(unordered = UNORDERED, ordered = ORDERED) {
    this.unordered = unordered;
    this.ordered = ordered;
  }

  async getBlocks(_) {
    const res = {
      data: this.unordered,
      chunkSize: 100,
      length: 900,
    };
    return res.data;
  }
  async checkBlocks(b1, b2, _) {
    const b1Index = this.ordered.indexOf(b1);
    const b2Index = this.ordered.indexOf(b2);
    return b1Index + 1 === b2Index;
  }
  async verifyBlocks(blocks, _) {
    return JSON.stringify(this.ordered) == JSON.stringify(blocks);
  }
}

module.exports = BlocksServiceMockup;
