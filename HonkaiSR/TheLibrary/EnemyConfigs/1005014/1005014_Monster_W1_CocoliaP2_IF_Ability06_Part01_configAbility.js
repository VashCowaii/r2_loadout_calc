const configAbility = {
  "fileName": "1005014_Monster_W1_CocoliaP2_IF_Ability06_Part01",
  "childAbilityList": [
    "1005014_Monster_W1_CocoliaP2_Ability06_Camera",
    "1005014_Monster_W1_CocoliaP2_IF_Ability06_Part01",
    "1005014_Monster_W1_CocoliaP2_IF_Ability06_Part02",
    "1005014_Monster_W1_CocoliaP2_IF_Ability06_Camera_Insert",
    "1005014_Monster_W1_CocoliaP2_IF_Ability06_Part01_Insert",
    "1005014_Monster_W1_CocoliaP2_IF_Ability06_Part02_Insert"
  ],
  "skillTrigger": "Skill06",
  "abilityType": "Skill",
  "energy": null,
  "toughnessList": null,
  "parse": [
    {
      "name": "Use Custom Character Function",
      "functionName": "<a class=\"gTempYellow\" id=\"1667812127\">CocoliaP2_Position</a>"
    },
    {
      "name": "Trigger Ability",
      "from": {
        "name": "Target Name",
        "target": "{{Caster}}"
      },
      "ability": "Monster_W1_CocoliaP2_IF_Ability06_Part02",
      "isTrigger": true
    },
    "Deleted bullshit"
  ],
  "references": []
}