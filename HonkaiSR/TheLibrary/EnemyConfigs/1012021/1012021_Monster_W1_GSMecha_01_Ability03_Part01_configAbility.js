const configAbility = {
  "fileName": "1012021_Monster_W1_GSMecha_01_Ability03_Part01",
  "childAbilityList": [
    "1012021_Monster_W1_GSMecha_01_Ability03_Camera",
    "1012021_Monster_W1_GSMecha_01_Ability03_Part01",
    "1012021_Monster_W1_GSMecha_01_Ability03_Part02"
  ],
  "skillTrigger": "Skill03",
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
      "ability": "Monster_W1_GSMecha_01_Ability03_Part02",
      "isTrigger": true
    },
    "Deleted bullshit",
    {
      "name": "Mark Entity For Immediate Death"
    }
  ],
  "references": []
}