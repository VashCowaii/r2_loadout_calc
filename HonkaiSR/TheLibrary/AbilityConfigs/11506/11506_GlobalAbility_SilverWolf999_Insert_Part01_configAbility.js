const configAbility = {
  "fileName": "11506_GlobalAbility_SilverWolf999_Insert_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Assign Global Buff State",
      "buffID": 150602,
      "state": "False",
      "amount": 0
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Is Matching Team Count",
        "countType": "Count1"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Is Matching Team Count",
        "countType": "Count2"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Is Matching Team Count",
        "countType": "Count3"
      }
    },
    {
      "name": "IF",
      "conditions": {
        "name": "Is Matching Team Count",
        "countType": "Count4"
      }
    },
    {
      "name": "UI Display Event",
      "popUpText": "McAwolfee 999"
    },
    "Deleted bullshit",
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "GlobalAbility_SilverWolf999_Insert_Part02",
      "isTrigger": true
    }
  ],
  "references": [],
  "targetObjectData": {
    "primaryTarget": "Inherent Target"
  }
}