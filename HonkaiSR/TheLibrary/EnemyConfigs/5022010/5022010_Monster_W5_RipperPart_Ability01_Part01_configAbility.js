const configAbility = {
  "fileName": "5022010_Monster_W5_RipperPart_Ability01_Part01",
  "childAbilityList": [
    "5022010_Monster_W5_RipperPart_Ability01_Camera",
    "5022010_Monster_W5_RipperPart_Ability01_Part01",
    "5022010_Monster_W5_RipperPart_Ability01_Part02"
  ],
  "skillTrigger": "Skill01",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W5_RipperPart_Ability01_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "targetObjectData": {
    "primaryTarget": "{{Ability Target List}}"
  },
  "realTargetData": {
    "primaryTarget": "Select Ally Target",
    "filter": {
      "name": "Target Sequence",
      "Sequence": [
        {
          "name": "Target Name",
          "target": "{{Enemy Team All}}"
        },
        {
          "name": "Target Filter",
          "conditions": {
            "name": "Has Modifier",
            "target": {
              "name": "Target Name",
              "target": "{{Parameter Target}}"
            },
            "modifier": "<a class=\"gModGreen\" id=\"1728959136\">Monster_W5_Ripper_Passive</a>"
          }
        }
      ]
    }
  },
  "references": []
}