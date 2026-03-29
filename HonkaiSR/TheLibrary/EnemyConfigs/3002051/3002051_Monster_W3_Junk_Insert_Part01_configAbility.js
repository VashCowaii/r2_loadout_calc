const configAbility = {
  "fileName": "3002051_Monster_W3_Junk_Insert_Part01",
  "abilityType": null,
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Exit Broken-State",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      }
    },
    {
      "name": "Animation Event",
      "target": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "state": "Skill03",
      "passed": [
        {
          "name": "Animation Task",
          "passed": [
            {
              "name": "IF",
              "conditions": {
                "name": "Has Modifier",
                "target": {
                  "name": "Target Name",
                  "target": "{{Caster}}"
                },
                "modifier": "<a class=\"gModGreen\" id=\"-2087901039\">Monster_W3_Junk_ATMark</a>",
                "invertCondition": true
              }
            }
          ]
        },
        {
          "name": "Animation Task"
        },
        {
          "name": "Animation Task",
          "passed": [
            {
              "name": "Mark Entity For Immediate Death"
            }
          ]
        }
      ]
    }
  ],
  "targetObjectData": {
    "primaryTarget": "{{Caster}}"
  },
  "references": []
}