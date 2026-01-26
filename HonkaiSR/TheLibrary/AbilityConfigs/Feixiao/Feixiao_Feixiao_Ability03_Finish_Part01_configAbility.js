const configAbility = {
  "fileName": "Feixiao_Feixiao_Ability03_Finish_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Feixiao_Ability03_Finish_Part02",
      "isTrigger": true
    },
    {
      "name": "Update Character Panel Visibility"
    },
    {
      "name": "Clear DMG Numbers(UI)",
      "target": {
        "name": "Target Name",
        "target": "{{Enemy Team All}}"
      }
    }
  ],
  "references": []
}